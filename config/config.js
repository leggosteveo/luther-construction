const dotenv = require("dotenv");
dotenv.config();

exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL;
exports.PORT = 8080 || process.env.PORT;
exports.jwtSecret = process.env.jwtSecret;
