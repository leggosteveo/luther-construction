const express = require("express");
const router = new express.Router();
const dotenv = require("dotenv");
dotenv.config();
const nodemailer = require("nodemailer");
/** 
NODE MAILER
**/

const transport = {
  port: 465,
  host: "smtp.mailgun.com",
  auth: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

const transporter = nodemailer.createTransport(transport); // Set Transporter Variable
// Send Message

const sendMessage = (req, res) => {
  console.log(req.body);
  let mailOpts;
  mailOpts = {
    from: req.body.email,
    to: [process.env.NODEMAILER_TO, req.body.email],
    subject: "Construction Inquiry",
    text: req.body.message,
  };
  transporter.sendMail(mailOpts, (error, info) => {
    //Email not sent
    if (error) {
      console.log("Error.", error);
    }
    console.log("Message sent.", mailOpts);
    console.log(info);
    res.status(200).json({ message: "Email sent successfully." });
  });
};
router.post("/message", sendMessage);

module.exports = sendMessage;
module.exports = router;
