import { userApis } from '../apis/_users';
import { contactApis } from '../apis/_contacts';
import { userActionTypes, utilsActionTypes, messagesActionTypes, screensActionTypes } from '../constants';

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

export const createNewContact = data => dispatch => {
  // * fire the loader
  dispatch({ type: utilsActionTypes.TOGGLE_LOADER, payload: true });
  return contactApis.addContact(data).then(res => {
    // * stop the loader
    dispatch({ type: utilsActionTypes.TOGGLE_LOADER, payload: false });
    // * update chats list, redirect to chat screen
    return res.success
      ? (dispatch({
          type: messagesActionTypes.ACTIVE_CHAT,
          payload: res.data[0]
        }),
        dispatch({
          type: userActionTypes.USER_CONNECTIONS_LIST,
          payload: res.data
        }),
        // * for small screen show messages screen
        dispatch({
          type: screensActionTypes.CHANGE_SCREEN,
          payload: window.screen.width > 425 ? 'Chats' : 'Messages'
        }))
      : dispatch({
          type: utilsActionTypes.SHOW_ALERT,
          payload: { message: 'Could not found the email you enterd' }
        });
  });
};
