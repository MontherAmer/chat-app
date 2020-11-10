import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getUserData } from '../../store/actions';

import Home from '../Home';

export default () => {
  const { _id } = useSelector(state => state.userState);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log(history.location.pathname.split('/')[2]);
    dispatch(getUserData(history.location.pathname.split('/')[3]));
  }, []);

  if (_id) history.push('/');

  return (
    <div className='redirect'>
      <div className='redirect_container'>
        <div className='redirec_loader'></div>
      </div>
    </div>
  );
};
