import { userApis } from '../apis/user_apis';
import { userActionTypes, utilsActionTypes } from '../constants';

export const getUserData = id => dispatch => {
  return userApis.getUserData(id).then(res => {
    return res.success
      ? dispatch({
          type: userActionTypes.STORE_USER_INFO,
          payload: { ...res.data }
        })
      : dispatch({
          type: utilsActionTypes.SHOW_ALERT,
          payload: { message: res.err }
        });
  });
};

export const updateUser = ({ key, value }) => dispatch => {
  const formData = new FormData();
  formData.append(key, value);
  if (key === 'theme') {
    // update the theme directlry
    dispatch({
      type: userActionTypes.STORE_USER_INFO,
      payload: { theme: value }
    });
  }
  return userApis.update(formData).then(res => {
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

// export const createConnection = data => dispatch => {
//   return connectionApis.createConnection(data).then(res => {
//     return res.success
//       ? dispatch({
//           type: userActionTypes.USER_CONNECTIONS_LIST,
//           payload: res.data
//         })
//       : dispatch({
//           type: errorActionTypes.LOGIN_ERROR,
//           payload: res.err
//         });
//   });
// };

// export const createGroup = data => dispatch => {
//   return connectionApis.createGroup(data).then(res => {
//     return res.success
//       ? dispatch({
//           type: userActionTypes.USER_CONNECTIONS_LIST,
//           payload: res.data
//         })
//       : dispatch({
//           type: errorActionTypes.LOGIN_ERROR,
//           payload: res.err
//         });
//   });
// };

// export const listConnections = () => dispatch => {
//   return connectionApis.listConnections().then(res => {
//     return res.success
//       ? dispatch({
//           type: userActionTypes.USER_CONNECTIONS_LIST,
//           payload: res.data
//         })
//       : dispatch({
//           type: errorActionTypes.LOGIN_ERROR,
//           payload: res.err
//         });
//   });
// };
