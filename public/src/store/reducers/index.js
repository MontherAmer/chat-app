import { combineReducers } from 'redux';

import userState from './_user';
import utilsState from './_utils';
import messagesState from './_messages';
import screensState from './_screens';

export default combineReducers({ userState, utilsState, messagesState, screensState });
