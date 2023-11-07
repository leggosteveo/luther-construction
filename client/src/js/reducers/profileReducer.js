import * as actions from "../actions/index";

export const initialState = {
  addingProject: false,
  projectsLoadingStatus: false,
  myProjects: [],
  projectsErrorStatus: false,
  displayProjects: false,
  addProjectErrorStatus: false,
  updateProjectErrorStatus: false,
  deleteProjectErrorStatus: false,
};

export const profileReducer = (state = initialState, action) => {
  if (action.type === actions.PROJECTS_LOADING_STATUS_TRUE) {
    const modState = Object.assign({}, state, {
      projectsLoadingStatus: true,
    });
    return modState;
  } else if (action.type === actions.GET_PROJECTS_SUCCESS) {
    const projectsArr = action.projectsList;
    const modState = Object.assign({}, state, {
      projectsLoadingStatus: false,
      myProjects: projectsArr,
      projectsErrorStatus: false,
      displayProjects: true,
    });
    return modState;
  } else if (action.type === actions.GET_PROJECTS_ERROR) {
    const modState = Object.assign({}, state, {
      projectsLoadingStatus: false,
      myProjects: [],
      projectsErrorStatus: true,
      displayProjects: false,
    });
    return modState;
  } else if (action.type === actions.ADD_PROJECT_SUCCESS) {
    const modState = Object.assign({}, state, {
      projectsLoadingStatus: false,
      addProjectErrorStatus: false,
    });
    return modState;
  } else if (action.type === actions.ADD_PROJECT_ERROR) {
    const modState = Object.assign({}, state, {
      projectsLoadingStatus: false,
      addProjectErrorStatus: true,
    });
    return modState;
  } else if (action.type === actions.UPDATE_PROJECT_SUCCESS) {
    const modState = Object.assign({}, state, {
      projectsLoadingStatus: false,
      updateProjectErrorStatus: false,
    });
    return modState;
  } else if (action.type === actions.UPDATE_PROJECT_ERROR) {
    const modState = Object.assign({}, state, {
      projectsLoadingStatus: false,
      updateProjectErrorStatus: true,
    });
    return modState;
  } else if (action.type === actions.DELETE_PROJECT_SUCCESS) {
    const modState = Object.assign({}, state, {
      projectsLoadingStatus: false,
      deleteProjectErrorStatus: false,
    });
    return modState;
  } else if (action.type === actions.DELETE_PROJECT_ERROR) {
    const modState = Object.assign({}, state, {
      projectsLoadingStatus: false,
      deleteProjectErrorStatus: true,
    });
    return modState;
  } else if (action.type === actions.ADDING_PROJECT) {
    const addingProject = action.addingProject;
    const modState = Object.assign({}, state, {
      addingProject: !state.addingProject,
    });
    return modState;
  }
  return state;
};

export default profileReducer;
