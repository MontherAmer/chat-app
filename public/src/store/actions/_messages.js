import { v4 as uuidv4 } from 'uuid';
import { messagesApis } from '../apis/_messages';
import { messagesActionTypes } from '../constants';

export const createMessage = data => dispatch => {
  dispatch({
    type: messagesActionTypes.TEMP_MESSAGE,
    payload: { uuid: uuidv4(), from: data.currentUser, ...data }
  });
  const formData = new FormData();
  formData.append('contactId', data._id);
  formData.append('text', data.text);
  if (data.image) formData.append('attachment', data.image);

  return messagesApis.create(formData).then(res => {
    return res.success
      ? dispatch({
          type: messagesActionTypes.NEW_MESSAGE,
          payload: res.data
        })
      : console.log('something wrong');
  });
};

export const listMessages = contactId => dispatch => {
  return messagesApis.list(contactId).then(res => {
    console.log('GET RESPOSE ', res);
    return res.success ? dispatch({ type: messagesActionTypes.MESSAGES_LIST, payload: res.data }) : console.log('errr');
  });
};
