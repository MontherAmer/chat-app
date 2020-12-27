import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import InputContainer from './Input';
import MessagesArea from './MessagesArea';

import { listMessages } from '../../store/actions';

export default () => {
  const { activeChat, messages } = useSelector(state => state.messagesState);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getMessages() {
      console.log('activeChatactiveChatactiveChatactiveChat ', activeChat);
      if (activeChat._id) await dispatch(listMessages(activeChat._id));
    }
    getMessages();
  }, [activeChat]);

  return (
    <div className='messages'>
      {activeChat._id ? <Header data={activeChat} /> : null}
      <MessagesArea />

      {activeChat._id ? <InputContainer _id={activeChat._id} /> : null}
    </div>
  );
};
