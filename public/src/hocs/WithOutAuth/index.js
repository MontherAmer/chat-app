import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function withOutAuth(Wrapped) {
  return function (props) {
    const { userState } = useSelector(state => state);
    if (userState._id) useHistory().push('/');
    return <Wrapped {...props} />;
  };
}

export default withOutAuth;
