import { userActionTypes } from '../constants';

const initialState = {
  _id: '',
  email: '',
  token: '',
  rememberMe: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case userActionTypes.USER_LOGED_IN:
      return { ...state, ...payload };
    case userActionTypes.USER_LOGED_OUT:
      return { ...state, _id: '', email: '', token: '' };
    case userActionTypes.USER_UPDATED:
      console.log('PAYLOAD ', payload);
      return { ...state, ...payload };
    default:
      return state;
  }
};
