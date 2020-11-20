import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateScreen, updateActiveChat } from '../../store/actions';

import { RiSearchLine } from 'react-icons/ri';

import ChatItem from './Contact';

export default () => {
  const [state, setState] = useState({ search: '', contacts: [] });
  const { contacts } = useSelector(state => state.userState);
  const dispatch = useDispatch();

  useEffect(() => {
    setState({ ...state, contacts: contacts });
  }, [contacts]);

  const handleSearch = e => {
    let value = e.target.value;
    let newContacts = contacts.filter(contact => contact.name.includes(value));
    setState({ ...state, search: e.target.value, contacts: newContacts });
  };

  const handleChooseChat = e => {
    dispatch(updateScreen('Messages'));
    dispatch(updateActiveChat(e));
  };

  return (
    <div className='contacts'>
      <div className='contacts_header'>
        <h4>Chats</h4>
      </div>

      <div className='contact__input'>
        <div className='contact__input__icon'>
          <RiSearchLine />
        </div>
        <input type='text' autoComplete='off' placeholder='Search user' value={state.search || ''} onChange={handleSearch} />
      </div>
      <h4>Recent</h4>
      <div className='contact__thumbnails'>
        {state.contacts.map(item => (
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
