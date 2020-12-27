import Axios from 'axios';
import { userActionTypes } from '../constants';
import configureStore from '../index';
const { store } = configureStore();
export const BASE_URL = '/';

export default () => {
  if (Axios.defaults.baseURL === BASE_URL) return;

  let token = localStorage.getItem('ChAt_ApP_ToKeNs');
  Axios.defaults.baseURL = BASE_URL;
  Axios.interceptors.request.use(async config => {
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
      console.log(response);
      if (response.data.unautherized) store.dispatch({ type: userActionTypes.REMOVE_USER_INFO });
      return response.data;
    },
    error => {
      return Promise.reject(error);
    }
  );
};
