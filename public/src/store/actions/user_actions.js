import { userApis } from '../apis/user_apis';
import { connectionApis } from '../apis/connections_apis';
import { userActionTypes, errorActionTypes } from '../constants';

export const getUserData = id => dispatch => {
  return userApis.getUserData(id).then(res => {
    return res.success
      ? dispatch({
          type: userActionTypes.STORE_USER_INFO,
          payload: { ...res.data }
        })
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

export const createConnection = data => dispatch => {
  return connectionApis.createConnection(data).then(res => {
    return res.success
      ? dispatch({
          type: userActionTypes.USER_CONNECTIONS_LIST,
          payload: res.data
        })
      : dispatch({
          type: errorActionTypes.LOGIN_ERROR,
          payload: res.err
        });
  });
};

export const createGroup = data => dispatch => {
  return connectionApis.createGroup(data).then(res => {
    return res.success
      ? dispatch({
          type: userActionTypes.USER_CONNECTIONS_LIST,
          payload: res.data
        })
      : dispatch({
          type: errorActionTypes.LOGIN_ERROR,
          payload: res.err
        });
  });
};

export const listConnections = () => dispatch => {
  return connectionApis.listConnections().then(res => {
    return res.success
      ? dispatch({
          type: userActionTypes.USER_CONNECTIONS_LIST,
          payload: res.data
        })
      : dispatch({
          type: errorActionTypes.LOGIN_ERROR,
          payload: res.err
        });
  });
};
