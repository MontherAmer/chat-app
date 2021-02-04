import Axios from 'axios';
import { userActionTypes } from '../constants';
import configureStore from '../index';
const { store } = configureStore();
export const BASE_URL = '/';

export default () => {
  if (Axios.defaults.baseURL === BASE_URL) return;
  Axios.defaults.baseURL = BASE_URL;
  let token = localStorage.getItem('ChAt_ApP_ToKeNs');

  Axios.interceptors.request.use(async config => {
    if (!token) token = localStorage.getItem('ChAt_ApP_ToKeNs');
    // * handle form data
    if (config.data instanceof FormData) {
      Object.assign(config.headers);
      config.headers = { ...config.headers, Authorization: `Barrer ${token}` };
    } else {
      // * handle other requests
      let data = {
        ...config.data
      };
      config.data = data;
      config.headers = { ...config.headers, Authorization: `Barrer ${token}` };
    }
    return config;
  });
  // * filter data from response
  Axios.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      return Promise.reject(error);
    }
  );
};
