import { threadsApis } from '../apis/threads_apis';
import { utilsActionTypes, errorActionTypes } from '../constants';

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

export const changeScreen = data => dispatch => {
  return dispatch({
    type: utilsActionTypes.CHANGE_SCREEN,
    payload: data
  });
};

export const suggestUsers = () => dispatch => {
  return threadsApis.suggestUsers().then(res => {
    res.success
      ? dispatch({
          type: utilsActionTypes.SUGGESTION_USER_LIST,
          payload: res.data
        })
      : dispatch({
          type: errorActionTypes.LOGIN_ERROR,
          payload: 'err'
        });
  });
};
