const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const passport = require("passport");
const compression = require("compression");
const path = require("path");

const app = express();
const { PORT, DATABASE_URL } = require("./config/config");

mongoose.Promise = global.Promise;

app.use(express.static(path.join(__dirname, "client/public")));

// force use of https://
app.use((req, res, next) => {
  let sslUrl;

  if (
    process.env.NODE_ENV === "production" &&
    req.headers["x-forwarded-proto"] !== "https"
  ) {
    sslUrl = ["https://luther-construction.herokuapp.com", req.url].join("");
    return res.redirect(sslUrl);
  }
  return next();
});

// compression for pagespeed
app.use(compression({ level: 9, threshold: 0 }));

// serve static files including the app bundle
// app.use(express.static("./client/build"));

app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use passport middleware
app.use(passport.initialize());

// load passport strategies
const localRegistrationStrategy = require("./passport/local-registration");
const localLoginStrategy = require("./passport/local-login");

passport.use("local-registration", localRegistrationStrategy);
passport.use("local-login", localLoginStrategy);

// pass the authentication checker middleware
const authCheckMiddleware = require("./middleware/auth-check");
// routes

/* app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
}); */

//////////////////////////////

const validator = require("validator");

function validateRegistrationForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = "";

  if (
    !payload ||
    typeof payload.email !== "string" ||
    payload.email.trim() === 0 ||
    !validator.isEmail(payload.email)
  ) {
    isFormValid = false;
    errors.email = "Please provide a valid email address.";
  }

  if (
    !payload ||
    typeof payload.password !== "string" ||
    payload.password.trim().length === 0
  ) {
    isFormValid = false;
    errors.password = "Please provide a password.";
  }

  if (
    !payload ||
    typeof payload.password !== "string" ||
    payload.password.trim() !== payload.confirmPassword.trim()
  ) {
    isFormValid = false;
    errors.password = "Passwords do not match. Please try again.";
  }

  if (
    !payload ||
    typeof payload.firstName !== "string" ||
    payload.firstName.trim().length === 0
  ) {
    isFormValid = false;
    errors.firstName = "Please provide your first name.";
  }

  if (
    !payload ||
    typeof payload.lastName !== "string" ||
    payload.lastName.trim().length === 0
  ) {
    isFormValid = false;
    errors.lastName = "Please provide your last name.";
  }

  if (!isFormValid) {
    message = "Check the form for errors.";
  }

  return {
    success: isFormValid,
    message,
    errors,
  };
}

///////////////////////////////

const authRoutes = require("./routes/auth.js");
const apiRoutes = require("./routes/api.js");
const mailerRoutes = require("./routes/mailer.js");

app.use("/api", authCheckMiddleware);
app.use("/auth", authRoutes);
app.use("/api", apiRoutes);
app.use("/mailer", mailerRoutes);

// all routes that are not the auth or api will be served the react app
// app.use("/*", express.static("./client/build"));

let server;
// closeServer needs access to a server object, but that only
// gets created when `runServer` runs, so we declare `server` here
// and then assign a value to it in run

// this function connects to our database, then starts the server
function runServer() {
  return new Promise((resolve, reject) => {
    mongoose.connect(DATABASE_URL, (err) => {
      if (err) {
        return reject(err);
      }
      server = app
        .listen(PORT, () => {
          console.log(`Your app is listening on port ${PORT}`); // eslint-disable-line
          resolve(PORT);
        })
        .on("error", (error) => {
          mongoose.disconnect();
          reject(error);
        });
    });
  });
}

// this function closes the server, and returns a promise. we'll
// use it in our integration tests later.
function closeServer() {
  return mongoose.disconnect().then(
    () =>
      new Promise((resolve, reject) => {
        console.log("Closing server"); // eslint-disable-line
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          resolve();
        });
      })
  );
}

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/public", "index.html"));
});

// if server.js is called directly (i.e. with `node server.js`), this block
// runs. but we also export the runServer command so other code (for example, test code) can start the server as needed.
if (require.main === module) {
  runServer().catch((err) => console.error(err)); // eslint-disable-line
}

module.exports = { app, runServer, closeServer };
