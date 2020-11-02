import { errorActionTypes } from '../constants';

const initialState = {
  message: '',
  show: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case errorActionTypes.LOGIN_ERROR:
      return { ...state, show: true, message: 'log in error' };
    default:
      return state;
  }
};
