import { userApis } from '../apis/user_apis';
import { userActionTypes, errorActionTypes } from '../constants';

export const login = data => dispatch => {
  return userApis.logIn(data).then(res => {
    return res.success
      ? (localStorage.setItem('USER_TOKEN', res.data.token),
        dispatch({
          type: userActionTypes.USER_LOGED_IN,
          payload: { ...res.data, rememberMe: data.rememberMe }
        }))
      : dispatch({
          type: errorActionTypes.LOGIN_ERROR,
          payload: res.err
        });
  });
};

export const signUp = data => dispatch => {
  return userApis.signUp(data).then(res => {
    return res.success
      ? (localStorage.setItem('USER_TOKEN', res.data.token),
        dispatch({
          type: userActionTypes.USER_LOGED_IN,
          payload: { ...res.data, rememberMe: data.rememberMe }
        }))
      : dispatch({
          type: errorActionTypes.LOGIN_ERROR,
          payload: res.err
        });
  });
};

export const updateUser = data => dispatch => {
  const formData = new FormData();
  for (let key in data) {
    formData.append(key, data[key]);
  }
  return userApis.update(data._id, formData).then(res => {
    return res.success
      ? dispatch({
          type: userActionTypes.USER_UPDATED,
          payload: res.data
        })
      : dispatch({
          type: errorActionTypes.LOGIN_ERROR,
          payload: res.err
        });
  });
};

export const logOut = () => dispatch => {
  return dispatch({ type: userActionTypes.USER_LOGED_OUT });
};
