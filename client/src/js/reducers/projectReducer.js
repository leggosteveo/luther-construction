import * as actions from "../actions/index";

export const initialState = {
  project: {},
  getProjectError: {},
  updateProjectError: {},
  updateProjectSuccess: {},
};

export const projectReducer = (state = initialState, action) => {
  if (action.type === actions.GET_SINGLE_PROJECT_SUCCESS) {
    const project = action.project;
    const modState = Object.assign({}, state, {
      getProjectError: {},
      project,
      updateProjectError: {},
      updateProjectSuccess: {},
    });
    return modState;
  }
  if (action.type === actions.GET_SINGLE_PROJECT_ERROR) {
    const error = action.error;
    const modState = Object.assign({}, state, {
      getProjectError: error,
      project:{},
      updateProjectError: {},
      updateProjectSuccess: {},
    });
    return modState;
  }
  if (action.type === actions.UPDATE_PROJECT_SUCCESS) {
    const successMsg = action.updateProjectMsg;
    const modState = Object.assign({}, state, {
      getProjectError: {},
      updateProjectError: {},
      updateProjectSuccess: successMsg,
    });
    return modState;
  }
  if (action.type === actions.UPDATE_PROJECT_ERROR) {
    const error = action.error;
    const modState = Object.assign({}, state, {
      getProjectError: {},
      project:{},
      updateProjectError: error,
      updateProjectSuccess: {},
    });
    return modState;
  }
  return state;
};

export default projectReducer;
