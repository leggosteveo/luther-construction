const dotenv = require("dotenv");
dotenv.config();

exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL;
exports.PORT = process.env.PORT || 8080;
exports.jwtSecret = process.env.jwtSecret;
exports.MAILGUN_API_KEY = process.env.MAILGUN_API_KEY;
exports.MAILGUN_USER = process.env.MAILGUN_USER;
exports.MAILGUN_PASS = process.env.MAILGUN_PASS;
exports.NODEMAILER_TO = process.env.NODEMAILER_TO;
