import { screensActionTypes } from '../constants';

const initialState = {
  screen: 'Profile'
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case screensActionTypes.CHANGE_SCREEN:
      return { ...state, screen: payload };
    default:
      return state;
  }
};
