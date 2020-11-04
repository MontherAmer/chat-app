import { combineReducers } from 'redux';

import userState from './user_reducer';
import errorsState from './errors_reducer';
import utilsState from './utils_reducer';

export default combineReducers({ userState, errorsState, utilsState });
