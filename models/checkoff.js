const mongoose = require("mongoose");

const checkoffSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  projectID: {
    type: String,
    required: true,
  },
  completionStatus: {
    type: Boolean,
    default: false,
  },
});

const Checkoff = mongoose.model("Checkoff", checkoffSchema);

module.exports = Checkoff;
