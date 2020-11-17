import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateScreen, updateActiveChat } from '../../store/actions';

import ChatItem from './Contact';

export default () => {
  const { contacts } = useSelector(state => state.userState);
  const dispatch = useDispatch();

  const handleChooseChat = e => {
    dispatch(updateScreen('Messages'));
    dispatch(updateActiveChat(e));
  };

  return (
    <div className='contacts'>
      <div className='contacts_header'>
        <h4>Chats</h4>
      </div>
      <div className='contact__thumbnails'>
        {contacts.map(item => (
          <ChatItem
            _id={item._id}
            image={item.image}
            name={item.name}
            online={item.online}
            lastMsg={item.lastMsg}
            time={item.time}
            key={item._id}
            onClick={handleChooseChat}
          />
        ))}
      </div>
    </div>
  );
};
