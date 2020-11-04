import { utilsActionTypes } from '../constants';

export const showAlert = ({ message, type }) => dispatch => {
  return dispatch({
    type: utilsActionTypes.SHOW_ALERT,
    payload: { message, type }
  });
};

export const hideAlert = ({ message, type }) => dispatch => {
  return dispatch({
    type: utilsActionTypes.HIDE_ALERT
  });
};

export const changeScreen = ({ screen }) => dispatch => {
  return dispatch({
    type: utilsActionTypes.CHANGE_SCREEN,
    payload: screen
  });
};
