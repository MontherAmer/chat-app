import { utilsActionTypes } from '../constants';

const initialState = {
  alert: {
    show: false,
    message: '',
    type: ''
  },
  screen: 'Contacts'
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case utilsActionTypes.SHOW_ALERT:
      return { ...state, alert: { show: true, ...payload } };
    case utilsActionTypes.HIDE_ALERT:
      return { ...state, alert: { ...state.alert, show: false } };
    case utilsActionTypes.CHANGE_SCREEN:
      return { ...state, screen: payload };
    default:
      return state;
  }
};
