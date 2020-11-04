import React from 'react';

export default ({ item }) => {
  return <div className={`message ${item.sender === '123' ? 'left' : 'right'}`}>{item.text}</div>;
};
