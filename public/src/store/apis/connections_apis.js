import Axios from 'axios';

export const connectionApis = {
  createConnection: data => Axios.post('/api/connections', data),
  createGroup: data => Axios.post('/api/connections/group', data),
  suggestUsers: () => Axios.get('/api/connections'),
  listConnections: () => Axios.get('/api/connections/list')
};
