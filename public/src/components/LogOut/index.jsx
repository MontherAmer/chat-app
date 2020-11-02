import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../store/actions';

export default () => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(logOut());
  return (
    <button onClick={handleClick} className='btn btn-primary'>
      Log Out
    </button>
  );
};
