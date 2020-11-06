import Axios from 'axios';

export const threadsApis = {
  create: data => Axios.post('/api/thread', data)
};
