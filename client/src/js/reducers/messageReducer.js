import * as actions from "../actions/index";

export const initialState = {
  sendMessageSuccess: false,
  sendMessageError: false,
};

export const messageReducer = (state = initialState, action) => {
  if (action.type === actions.SEND_MESSAGE_SUCCESS) {
    const modState = Object.assign({}, state, {
      sendMessageSuccess: true,
      sendMessageError: false,
    });
    return modState;
  } else if (action.type === actions.SEND_MESSAGE_ERROR) {
    const modState = Object.assign({}, state, {
      sendMessageSuccess: false,
      sendMessageError: true,
    });
    return modState;
  } else if (action.type === actions.CLEAR_FORM) {
    const modState = Object.assign({}, state, {
      sendMessageSuccess: false,
      sendMessageError: false,
    });
    return modState;
  }
  return state;
};

export default messageReducer;
