import Axios from 'axios';

export const groupApis = {
  create: data => Axios.post(`/api/group`, data)
};
