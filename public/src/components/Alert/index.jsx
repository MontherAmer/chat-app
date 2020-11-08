import React from 'react';
import { useDispatch } from 'react-redux';
import { hideAlert } from '../../store/actions';

export default ({ show, message, type }) => {
  const dispatch = useDispatch();

  if (show)
    setTimeout(() => {
      dispatch(hideAlert());
    }, 3000);

  return (
    <div className={`alert ${type === 'success_alert' ? 'green' : ''}  ${show ? 'slide-alert-in' : 'slide-alert-out'}`}>{message}</div>
  );
};
