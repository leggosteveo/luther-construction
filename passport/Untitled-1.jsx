app.post("/register", (req, res) => {
    dataServiceAuth
      .registerUser(req.body)
      .then(() => {
        res.render("register", { successMessage: "User created" });
      })
      .catch((err) => {
        res.render("register", { errorMessage: err, user: req.body.user });
      });
  });
  
  module.exports.registerUser = function (userData) {
    return new Promise(function (resolve, reject) {
      if (userData.password != userData.password2) {
        reject("Passwords do not match");
      } else {
        let newUser = new User(userData);
  
        newUser
          .save((err) => {
            resolve();
          })
          .catch((err) => {
            if (err) {
              if (err.code == 11000) {
                reject("User Name already taken");
              } else {
                reject("There was an error creating the user: ${err}");
              }
            }
          });
      }
    });
  };
  
  module.exports.registerUser = function (userData) {
    if (userData.password != userData.password2) {
      return Promise.reject("Passwords do not match");
    }
  
    let newUser = new User(userData);
  
    return newUser.save().catch((err) => {
      if (err.code == 11000) {
        return Promise.reject("User Name already taken");
      } else {
        return Promise.reject("There was an error creating the user: ${err}");
      }
    });
  };