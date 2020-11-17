import React from 'react';
import { useSelector } from 'react-redux';
export default () => {
  const { activeChat } = useSelector(state => state.utilsState);
  return <div className='messages'>messages {activeChat}</div>;
};
