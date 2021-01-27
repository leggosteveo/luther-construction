const dotenv = require("dotenv");
dotenv.config();

exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL;
exports.PORT = process.env.PORT || 8080;
exports.jwtSecret = process.env.jwtSecret;
