import { utilsActionTypes, messagesActionTypes, screensActionTypes } from '../constants';

export const changeScreen = data => dispatch => {
  return dispatch({
    type: screensActionTypes.CHANGE_SCREEN,
    payload: data
  });
};

export const showAlert = ({ message, type, success }) => dispatch => {
  return dispatch({
    type: utilsActionTypes.SHOW_ALERT,
    payload: { message, type, success }
  });
};

export const hideAlert = () => dispatch => {
  return dispatch({
    type: utilsActionTypes.HIDE_ALERT
  });
};

export const showLoader = data => dispatch => {
  return dispatch({
    type: utilsActionTypes.TOGGLE_LOADER,
    payload: data
  });
};

export const updateScreen = data => dispatch => {
  data = window.screen.width > 425 && data === 'Messages' ? 'Chats' : data;
  return dispatch({
    type: screensActionTypes.CHANGE_SCREEN,
    payload: data
  });
};

export const updateActiveChat = data => dispatch => {
  return dispatch({
    type: messagesActionTypes.ACTIVE_CHAT,
    payload: data
  });
};
