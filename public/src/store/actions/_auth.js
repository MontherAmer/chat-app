import { authApis } from '../apis/_auth';
import { userActionTypes, utilsActionTypes } from '../constants';

export const login = data => dispatch => {
  return authApis.logIn(data).then(res => {
    return res.success
      ? dispatch({
          type: userActionTypes.STORE_USER_INFO,
          payload: res.data
        })
      : dispatch({
          type: utilsActionTypes.SHOW_ALERT,
          payload: { message: res.err }
        });
  });
};

export const signUp = data => dispatch => {
  return authApis.signUp(data).then(res => {
    return res.success
      ? dispatch({
          type: userActionTypes.STORE_USER_INFO,
          payload: res.data
        })
      : dispatch({
          type: utilsActionTypes.SHOW_ALERT,
          payload: { message: res.err }
        });
  });
};

export const logOut = () => dispatch => {
  document.cookie = 'ChAt_ApP_ToKeNs= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
  return dispatch({ type: userActionTypes.REMOVE_USER_INFO });
};
