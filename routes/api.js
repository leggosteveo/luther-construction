const express = require("express");
const mongoose = require("mongoose");
const Project = require("../models/project");
const {
  MAILGUN_USER,
  MAILGUN_PASS,
  NODEMAILER_TO,
} = require("../config/config");

mongoose.Promise = global.Promise;

const router = new express.Router();

/**
 * GET PROJECTS
 *
 * Retrieve user's projects list with updated checkoff count
 * GET '/projects/:userID'
 * Params: userID
 **/

/*
GET ALL PROJECTS
*/

const getAllProjects = (req, res) => {
  console.log("getting projects");
  console.log(req.params.userID);
  Project.find().exec((err, projects) => {
    console.log(projects);
    res.status(200).json(projects);
  });
};

router.get("/projects", getAllProjects);

/**
 *
 *
 * Get Specific Users Projects
 *
 * **/
const getUsersProjects = (req, res) => {
  console.log("getting projects");
  console.log(req.params.userID);
  Project.find({ userID: req.params.userID }).exec((err, projects) => {
    console.log(projects);
    res.status(200).json(projects);
  });
};
router.get("/projects/:userID", getUsersProjects);

/*
GET SINGLE PROJECT
*/

const getSingleProject = (req, res) => {
  console.log("getting project");
  console.log(req.params.projectID);

  Project.findById(req.params.projectID).exec((err, project) => {
    console.log(project);
    res.status(200).json(project);
  });
};

router.get("/project/:projectID", getSingleProject);

/**
 * UPDATE PROJECT
 *
 * Removes user project and all related checkoff docs
 * UPDATE - '/projects/:projectID'
 * Params: projectID
 **/
const updateProject = (req, res) => {
  const projectToUpdate = req.params.projectID;
  const status = req.body.status;
  console.log("Update Project", status, projectToUpdate);
  return new Promise((resolve, reject) => {
    Project.findOneAndUpdate({ _id: projectToUpdate }, { status: status }) // eslint-disable-line
      .exec((err, updatedProject) => {
        if (err) {
          reject(err);
        } else {
          resolve(updatedProject);
        }
      });
  })

    .then(() => {
      res.status(200).json({ message: `${projectToUpdate} updated.` });
    })
    .catch((err) => res.status(500).json(err));
};

router.put("/project/:projectID", updateProject);

/**
 * DELETE PROJECT
 *
 * Removes user project and all related checkoff docs
 * DELETE - '/projects/:projectID'
 * Params: projectID
 **/
const deleteProject = (req, res) => {
  const projectToDelete = req.params.projectID;
  return new Promise((resolve, reject) => {
    Project.findById(projectToDelete)
      .remove()
      .exec()
      .then(() => {
        res.status(200).json({ message: `${projectToDelete} removed.` });
      })
      .catch((err) => {
        console.log("Error deleting.", err);
        res.status(500).json(err);
      });
  });
};

router.delete("/projects/:projectID", deleteProject);

/**
 * ADD PROJECT
 *
 * Add a new user project
 * POST '/projects'
 * Params: userID, projectName string, lat, lng
 **/
const addProject = (req, res) => {
  const userID = req.body.userID;
  const projectID = req.body.projectID;
  const projectBudget = req.body.projectBudget;
  const projectMessage = req.body.projectMessage;
  const projectTimeFrame = req.body.projectTimeFrame;
  Project.create({
    projectBudget,
    projectMessage,
    projectID,
    projectTimeFrame,
    userID,
  })
    .then(() => res.status(201).json(`Successfully added ${projectID}`))
    .catch((err) => {
      console.log("Error adding project");
      res.status(500).json(err.message);
    });
};

router.post("/projects", addProject);

// module.exports = router;
module.exports = {
  router,
  getAllProjects,
  getUsersProjects,
  getSingleProject,
  deleteProject,
  updateProject,
  addProject,
};
module.exports = router;
