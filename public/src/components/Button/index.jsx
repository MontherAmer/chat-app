import React from 'react';

export default ({ label, onClick }) => {
  return <button onClick={onClick}>{label}</button>;
};
