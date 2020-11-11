import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ThemeContentProvider from './context/ThemeContext';

import configureStore from './store';

import fireApi from './store/apis';

import App from './App';

import './styles/index.scss';

fireApi();
export const { store, persistor } = configureStore();

const render = Component => {
  return ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeContentProvider>
          <Component />
        </ThemeContentProvider>
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);
