import { messagesApis } from '../apis/_messages';
import { messagesActionTypes } from '../constants';

export const createMessage = data => dispatch => {
  return messagesApis.create(data).then(res => {
    console.log(res);
  });
};
