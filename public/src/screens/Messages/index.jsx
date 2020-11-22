import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Header from './Header';
import InputContainer from './Input';

export default () => {
  const { activeChat } = useSelector(state => state.messagesState);

  useEffect(() => {
    console.log('hi', activeChat);
  }, [activeChat]);

  return (
    <div className='messages'>
      {activeChat._id ? <Header data={activeChat} /> : null}

      {activeChat._id ? <InputContainer _id={activeChat._id} /> : null}
    </div>
  );
};
