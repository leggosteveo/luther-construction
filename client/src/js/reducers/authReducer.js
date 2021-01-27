import * as actions from "../actions/index";

export const initialState = {
  authLoadingStatus: false,
  registrationSuccessMessage: {},
  registrationErrorMessage: {},
  loginSuccessMessage: {},
  loginErrorMessage: {},
  loginStatus: false,
  currentUser: null,
  userLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  if (action.type === actions.AUTH_LOADING_STATUS_TRUE) {
    const modState = Object.assign({}, state, {
      authLoadingStatus: true,
    });
    return modState;
  } else if (action.type === actions.REGISTER_USER_SUCCESS) {
    const successMessage = action.registrationSuccessMessage;
    const modState = Object.assign({}, state, {
      authLoadingStatus: false,
      registrationSuccessMessage: successMessage,
      registrationErrorMessage: {},
    });
    return modState;
  } else if (action.type === actions.REGISTER_USER_ERROR) {
    const errors = action.registrationErrorMessage;
    const modState = Object.assign({}, state, {
      authLoadingStatus: false,
      registrationErrorMessage: errors,
    });
    return modState;
  } else if (action.type === actions.LOGIN_USER_SUCCESS) {
    const successMessage = action.loginSuccessMessage;
    const userName = {
      firstName: successMessage.user.firstName,
      lastName: successMessage.user.lastName,
    };
    const modState = Object.assign({}, state, {
      authLoadingStatus: false,
      registrationSuccessMessage: {},
      loginErrorMessage: {},
      loginRedirect: true,
      currentUser: userName,
      userLoggedIn: true,
    });
    return modState;
  } else if (action.type === actions.LOGIN_USER_ERROR) {
    const errorMessage = action.loginErrorMessage;
    const modState = Object.assign({}, state, {
      authLoadingStatus: false,
      registrationSuccessMessage: {},
      loginErrorMessage: errorMessage,
    });
    return modState;
  } else if (action.type === actions.LOGOUT_USER) {
    const modState = Object.assign({}, state, {
      userLoggedIn: false,
      currentUser: null,
    });
    return modState;
  } else if (action.type === actions.CLEAN_AUTH) {
    const modState = Object.assign({}, state, {
      authLoadingStatus: false,
      registrationSuccessMessage: {},
      registrationErrorMessage: {},
      loginSuccessMessage: {},
      loginErrorMessage: {},
      loginRedirect: false,
    });
    return modState;
  }
  return state;
};

export default authReducer;
