import React from 'react';
import { useSelector } from 'react-redux';

import SignUp from '../../screens/Auth/SignUp';

function withAuth(Wrapped) {
  return function (props) {
    const { userState } = useSelector(state => state);
    if (!userState._id) return <SignUp />;
    return <Wrapped {...props} />;
  };
}

export default withAuth;
