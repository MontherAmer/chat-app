import React from 'react';

export default ({ show, message, type }) => {
  return <div className={`alert ${show ? 'slide-alert-in' : 'slide-alert-out'}`}>{message}</div>;
};
