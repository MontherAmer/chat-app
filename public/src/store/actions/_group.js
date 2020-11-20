import { utilsActionTypes, userActionTypes, messagesActionTypes, screensActionTypes } from '../constants';
import { groupApis } from '../apis/_groups';

export const createGroup = data => dispatch => {
  dispatch({ type: utilsActionTypes.TOGGLE_LOADER, payload: true });
  // * create form data
  const formData = new FormData();
  if (data.image) formData.append('image', data.image);
  formData.append('name', data.name);
  formData.append('users', JSON.stringify(data.users));
  formData.append('onlyAdminCanMsg', data.onlyAdminCanMsg ? true : false);

  return groupApis.create(formData).then(res => {
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
          payload: { message: res.err }
        });
  });
};
