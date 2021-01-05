import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getUserData } from '../../store/actions';

import Loader from '../../components/Loader';

export default () => {
  const { _id } = useSelector(state => state.userState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    localStorage.setItem('ChAt_ApP_ToKeNs', history.location.pathname.split('/')[2]);
    dispatch(getUserData(history.location.pathname.split('/')[3]));
  }, []);

  if (_id) history.push('/');

  return <Loader />;
};
