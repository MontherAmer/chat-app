import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['userState', 'messagesState', 'screensState']
};

const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(ReduxThunk, logger);

const store = createStore(pReducer, middleware);

const persistor = persistStore(store);

export default () => {
  return { persistor, store };
};
