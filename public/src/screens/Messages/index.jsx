import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

export default () => {
  const { activeChat } = useSelector(state => state.utilsState);

  useEffect(() => {
    console.log('hi', activeChat);
  }, [activeChat]);

  return <div className='messages'>{activeChat._id ? <Header data={activeChat} /> : null}</div>;
};
