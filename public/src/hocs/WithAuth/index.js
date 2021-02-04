import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function withAuth(Wrapped) {
  return function (props) {
    const { userState } = useSelector(state => state);
    if (userState.app !== 'Chat_app') useHistory().push('/login');

    return <Wrapped {...props} />;
  };
}

export default withAuth;
