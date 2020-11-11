import { authApis } from '../apis/auth';
import { userActionTypes, utilsActionTypes } from '../constants';

export const login = data => dispatch => {
  return authApis.logIn(data).then(res => {
    console.log('my response', res);
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
  return dispatch({ type: userActionTypes.REMOVE_USER_INFO });
};
