import Axios from 'axios';

export const BASE_URL = '/';

export default () => {
  if (Axios.defaults.baseURL === BASE_URL) return;
  let token = Object.fromEntries(document.cookie.split('; ').map(v => v.split('=').map(decodeURIComponent))).ChAt_ApP_ToKeNs;
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
      config.headers = { ...config.headers, Authorization: token };
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
