import Axios from 'axios';

export const contactApis = {
  addContact: data => Axios.post('/api/contact', data)
};
