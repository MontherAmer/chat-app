import Axios from 'axios';

export const messagesApis = {
  create: data => Axios.post(`/api/message`, data),
  list: contactId => Axios.get(`/api/message/${contactId}`)
};
