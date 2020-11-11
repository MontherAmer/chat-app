import React from 'react';
import { useDispatch } from 'react-redux';
import { hideAlert } from '../../store/actions';

export default ({ show, message, success }) => {
  const dispatch = useDispatch();

  if (show)
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);

  return <div className={`alert ${success ? 'success--alert' : ''} `}>{message}</div>;
};
