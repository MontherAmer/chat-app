import { combineReducers } from 'redux';

import userState from './user_reducer';
import errorsState from './errors_reducer';
import utilsState from './utils_reducer';
import messagesState from './messagesReducer';

export default combineReducers({ userState, errorsState, utilsState, messagesState });
