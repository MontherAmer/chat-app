import { v4 as uuidv4 } from 'uuid';
import { messagesApis } from '../apis/_messages';
import { messagesActionTypes, userActionTypes } from '../constants';

export const createMessage = data => dispatch => {
  let uuid = uuidv4();
  dispatch({
    type: messagesActionTypes.TEMP_MESSAGE,
    payload: { uuid, from: data.currentUser, ...data }
  });
  const formData = new FormData();
  formData.append('contactId', data._id);
  formData.append('text', data.text);
  formData.append('uuid', uuid);
  if (data.image) formData.append('attachment', data.image);

  // * update the messages and also update the concat list to update last message
  return messagesApis.create(formData).then(res => {
    return res.success
      ? (dispatch({
          type: messagesActionTypes.NEW_MESSAGE_CREATED_FROM_RESPONSE,
          payload: res.data
        }),
        dispatch({ type: userActionTypes.USER_CONNECTIONS_LIST, payload: res.subData }))
      : console.log('something wrong');
  });
};

export const listMessages = (contactId, skip = 0) => dispatch => {
  if (contactId)
    return messagesApis.list(contactId, skip).then(res => {
      return res.success
        ? dispatch({ type: res.append ? messagesActionTypes.NEW_MESSAGE_APPEND : messagesActionTypes.MESSAGES_LIST, payload: res.data })
        : console.log('errr');
    });
};
