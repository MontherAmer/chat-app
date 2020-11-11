import { combineReducers } from 'redux';

import userState from './_user';
import utilsState from './_utils';

export default combineReducers({ userState, utilsState });
