import Axios from 'axios';

export const messagesApis = {
  create: data => Axios.post(`/api/message`, data)
};
