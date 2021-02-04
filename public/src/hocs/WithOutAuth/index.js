import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Home from '../../screens/Home';

function withOutAuth(Wrapped) {
  return function (props) {
    const { userState } = useSelector(state => state);
    if (userState.app === 'Chat_app') useHistory().push('/');
    return <Wrapped {...props} />;
  };
}

export default withOutAuth;
