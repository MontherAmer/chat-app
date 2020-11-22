import { messagesApis } from '../apis/_messages';
import { messagesActionTypes } from '../constants';

export const createMessage = data => dispatch => {
  const formData = new FormData();
  formData.append('contactId', data._id);
  formData.append('text', data.text);
  if (data.image) formData.append('attachment', data.image);

  return messagesApis.create(formData).then(res => {
    console.log(res);
  });
};
