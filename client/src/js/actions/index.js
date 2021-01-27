import "isomorphic-fetch";
import Auth from "../components/modules/Auth";

/**
 *
 * AUTH SECTION
 *
 **/

// Auth Loading Element
export const AUTH_LOADING_STATUS_TRUE = "AUTH_LOADING_STATUS_TRUE";
export const authLoadingStatusTrue = () => ({
  type: AUTH_LOADING_STATUS_TRUE,
});

// Clean Auth - set all auth related state to initial
export const CLEAN_AUTH = "CLEAN_AUTH";
export const cleanAuth = () => ({
  type: CLEAN_AUTH,
});

/**
 * REGISTER USER
 **/
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const registerUserSuccess = (registrationSuccessMessage) => ({
  type: REGISTER_USER_SUCCESS,
  registrationSuccessMessage,
});

export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
export const registerUserError = (registrationErrorMessage) => ({
  type: REGISTER_USER_ERROR,
  registrationErrorMessage,
});

// POST to API for new user registration
export const registerUser = (user) => (dispatch) => {
  dispatch(authLoadingStatusTrue());
  const registrationEndpoint = "/auth/registration";
  const userData = user;
  return fetch(registrationEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (response.status === 200) {
        // success
        return response
          .json()
          .then((successResponse) =>
            dispatch(registerUserSuccess(successResponse))
          );
      }
      return (
        response
          .json()
          // failure
          .then((errorResponse) => {
            const errors = errorResponse.errors ? errorResponse.errors : {};
            errors.summary = errorResponse.message;
            dispatch(registerUserError(errors));
          })
      );
    })
    .catch(
      (error) => console.log(error) // eslint-disable-line
    );
};

/**
 * LOGIN USER
 **/
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const loginUserSuccess = (loginSuccessMessage) => ({
  type: LOGIN_USER_SUCCESS,
  loginSuccessMessage,
});

export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const loginUserError = (loginErrorMessage) => ({
  type: LOGIN_USER_ERROR,
  loginErrorMessage,
});

// POST to API to login existing user
export const loginUser = (user) => (dispatch) => {
  dispatch(authLoadingStatusTrue());
  const loginEndpoint = "/auth/login";
  const userData = user;
  return fetch(loginEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (response.status === 200) {
        // success
        return response.json().then((successResponse) => {
          Auth.authenticateUser(successResponse.token);
          Auth.storeUserID(successResponse.user.userID);
          Auth.storeUserRole(successResponse.user.userRole);
          Auth.storeUserName({
            firstName: successResponse.user.firstName,
            lastName: successResponse.user.lastName,
          });
          dispatch(loginUserSuccess(successResponse));
        });
      }
      return (
        response
          .json()
          // failure
          .then((errorResponse) => {
            const errors = errorResponse.errors ? errorResponse.errors : {};
            errors.summary = errorResponse.message;
            dispatch(loginUserError(errors));
          })
      );
    })
    .catch(
      (error) => console.log(error) // eslint-disable-line
    );
};

// Logout User

export const LOGOUT_USER = "LOGOUT_USER";
export const logoutUser = () => ({
  type: LOGOUT_USER,
});

/**
 *
 * PROFILE SECTION
 *
 **/

// Projects Loading Element
export const PROJECTS_LOADING_STATUS_TRUE = "PROJECTS_LOADING_STATUS_TRUE";
export const projectsLoadingStatusTrue = () => ({
  type: PROJECTS_LOADING_STATUS_TRUE,
});

/**
 * GET PROJECTS
 **/
export const GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS";
export const getProjectsSuccess = (projectsList) => ({
  type: GET_PROJECTS_SUCCESS,
  projectsList,
});

export const GET_PROJECTS_ERROR = "GET_PROJECTS_ERROR";
export const getProjectsError = (projectsError) => ({
  type: GET_PROJECTS_ERROR,
  projectsError,
});

// GET request to API for all projects
export const getProjects = () => (dispatch) => {
  dispatch(projectsLoadingStatusTrue());
  const userRole = Auth.getUserRole();
  const userID = Auth.getUserID();
  console.log(userRole);
  let projectsEndpoint;
  if (userRole == "admin") {
    projectsEndpoint = "/api/projects";
  } else {
    projectsEndpoint = `/api/projects/${userID}`;
  }
  return fetch(projectsEndpoint, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `bearer ${Auth.getToken()}`,
    },
  })
    .then((response) => {
      console.log("Got projects after fetch");
      if (response.status === 200) {
        console.log("Success after fetch");
        return response.json().then((successResponse) => {
          dispatch(getProjectsSuccess(successResponse));
        });
      }
      return response.json().then((errorResponse) => {
        console.log("Error after fetch");
        dispatch(getProjectsError(errorResponse));
      });
    })
    .catch(
      (error) => console.log(error) // eslint-disable-line
    );
};

/**
 * GET SINGLE PROJECT
 **/
export const GET_SINGLE_PROJECT_SUCCESS = "GET_SINGLE_PROJECT_SUCCESS";
export const getSingleProjectSuccess = (project) => ({
  type: GET_SINGLE_PROJECT_SUCCESS,
  project,
});

export const GET_SINGLE_PROJECT_ERROR = "GET_PROJECTS_ERROR";
export const getSingleProjectError = (projectsError) => ({
  type: GET_SINGLE_PROJECT_ERROR,
  projectsError,
});

// GET request to API for single project
export const getSingleProject = (projectID) => (dispatch) => {
  dispatch(projectsLoadingStatusTrue());
  let projectEndpoint;
  projectEndpoint = `/api/project/${projectID}`;

  return fetch(projectEndpoint, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `bearer ${Auth.getToken()}`,
    },
  })
    .then((response) => {
      console.log("Got project after fetch");
      if (response.status === 200) {
        console.log("Success after fetch");
        return response.json().then((successResponse) => {
          dispatch(getSingleProjectSuccess(successResponse));
        });
      }
      return response.json().then((errorResponse) => {
        console.log("Error after fetch");
        dispatch(getSingleProjectError(errorResponse));
      });
    })
    .catch(
      (error) => console.log(error) // eslint-disable-line
    );
};

/**
 * ADD PROJECT
 **/
export const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS";
export const addProjectSuccess = (addProjectMsg) => ({
  type: ADD_PROJECT_SUCCESS,
  addProjectMsg,
});

export const ADD_PROJECT_ERROR = "ADD_PROJECT_ERROR";
export const addProjectError = (addProjectMsg) => ({
  type: ADD_PROJECT_ERROR,
  addProjectMsg,
});

// POST to API for adding project
export const addProject = (projectData) => (dispatch) => {
  console.log("Updating Projects");
  dispatch(projectsLoadingStatusTrue());
  const userID = Auth.getUserID();
  const projectID = projectData.name;
  const projectBudget = projectData.budget;
  const projectMessage = projectData.message;
  const projectTimeFrame = projectData.timeFrame;
  const projectsEndpoint = "/api/projects";
  return fetch(projectsEndpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `bearer ${Auth.getToken()}`,
    },
    body: JSON.stringify({
      projectBudget,
      projectMessage,
      projectID,
      projectTimeFrame,
      userID,
    }),
  })
    .then((response) => {
      console.log("Project added successfully");
      if (response.status === 201) {
        return response
          .json()
          .then((successResponse) => {
            dispatch(addProjectSuccess(successResponse));
          })
          .then(() => dispatch(getProjects()));
      } else {
        return response.json().then((errorResponse) => {
          dispatch(addProjectError(errorResponse));
        });
      }
    })
    .catch(
      (error) => console.log(error) // eslint-disable-line
    );
};

/**
 * UPDATE PROJECT
 **/
export const UPDATE_PROJECT_SUCCESS = "UPDATE_PROJECT_SUCCESS";
export const updateProjectSuccess = (updateProjectMsg) => ({
  type: UPDATE_PROJECT_SUCCESS,
  updateProjectMsg,
});

export const UPDATE_PROJECT_ERROR = "UPDATE_PROJECT_ERROR";
export const updateProjectError = (updateProjectMsg) => ({
  type: UPDATE_PROJECT_ERROR,
  updateProjectMsg,
});

// POST to API for updating project
export const updateProjectStatus = (projectID, status) => (dispatch) => {
  console.log("Updating Project");
  const projectEndpoint = `/api/project/${projectID}`;
  return fetch(projectEndpoint, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `bearer ${Auth.getToken()}`,
    },
    body: JSON.stringify({
      status,
    }),
  })
    .then((response) => {
      console.log("Project updated successfully");
      if (response.status === 200) {
        return response
          .json()
          .then((successResponse) => {
            console.log("Update projects success");
            dispatch(updateProjectSuccess(successResponse));
          })
          .then(() => dispatch(getSingleProject(projectID)));
      } else {
        console.log("Error Updating Project");
        return response.json().then((errorResponse) => {
          dispatch(updateProjectError(errorResponse));
        });
      }
    })
    .catch(
      (error) => console.log(error) // eslint-disable-line
    );
};

/**
 * DELETE PROJECT
 **/
export const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS";
export const deleteProjectSuccess = (deleteProjectMsg) => ({
  type: DELETE_PROJECT_SUCCESS,
  deleteProjectMsg,
});

export const DELETE_PROJECT_ERROR = "DELETE_PROJECT_ERROR";
export const deleteProjectError = (deleteProjectMsg) => ({
  type: DELETE_PROJECT_ERROR,
  deleteProjectMsg,
});

// DELETE request to API to delete a project
export const deleteProject = (projectID) => (dispatch) => {
  dispatch(projectsLoadingStatusTrue());
  const projectsEndpoint = `/api/projects/${projectID}`;
  return fetch(projectsEndpoint, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `bearer ${Auth.getToken()}`,
    },
  })
    .then((response) => {
      if (response.status === 200) {
        return response
          .json()
          .then((successResponse) => {
            dispatch(deleteProjectSuccess(successResponse));
          })
          .then(() => dispatch(getProjects()));
      }
      return response.json().then((errorResponse) => {
        dispatch(deleteProjectError(errorResponse));
      });
    })
    .catch(
      (error) => console.log(error) // eslint-disable-line
    );
};
