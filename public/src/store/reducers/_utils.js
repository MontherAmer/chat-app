import { utilsActionTypes, userActionTypes } from '../constants';

const initialState = {
  alert: {
    show: false,
    message: '',
    success: false
  },
  loader: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case utilsActionTypes.SHOW_ALERT:
      return { ...state, loader: false, alert: { show: true, ...payload } };
    case utilsActionTypes.HIDE_ALERT:
      return { ...state, alert: { ...state.alert, show: false, success: false } };
    case utilsActionTypes.TOGGLE_LOADER:
      return { ...state, loader: payload };
    case utilsActionTypes.ERROR_RESPONSE:
      return { ...state, loader: false };
    case userActionTypes.STORE_USER_INFO:
      return { ...state, loader: false };
    default:
      return state;
  }
};
