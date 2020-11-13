import Axios from 'axios';

export const contactApis = {
  addContact: data => Axios.post('/api/contact', data)
  // createGroup: data => Axios.post('/api/connections/group', data),
  // suggestUsers: () => Axios.get('/api/connections'),
  // listConnections: () => Axios.get('/api/connections/list')
};
