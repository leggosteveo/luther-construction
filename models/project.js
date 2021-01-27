const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  projectID: {
    type: String,
    required: true,
  },
  projectBudget: {
    type: String,
  },
  projectMessage: {
    type: String,
  },
  projectTimeFrame: {
    type: String,
  },
  completionStatus: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    default: "Running",
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
