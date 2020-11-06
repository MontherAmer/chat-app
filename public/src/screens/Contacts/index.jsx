import React from 'react';
import { useDispatch } from 'react-redux';
import profile from '../../assets/images/profile';
import { changeScreen } from '../../store/actions';

import ContactItem from '../../components/ContactItem';

import { HiDotsVertical } from 'react-icons/hi';

const contacts = [
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' },
  { title: 'hello ', key2: 'this is the message', key3: '20', key4: '12:04' }
];

export default () => {
  const dispatch = useDispatch();
  return (
    <div className='contacts'>
      {/* Contacts header */}
      <div className='contacts__header'>
        <div>
          <img src={profile} className='contact__img' onClick={() => dispatch(changeScreen('Profile'))} />
          <p className='title'> Chats </p>
        </div>
        <HiDotsVertical className='contacts__menu' title='new chat' onClick={() => dispatch(changeScreen('Menu'))} />
      </div>

      {/* Contacts search */}
      <div className='contacts__search'>
        <input type='text' placeholder='Search' />
      </div>

      <div className='contacts__items'>
        {contacts.map((item, i) => (
          <ContactItem key={i} contact={item} />
        ))}
      </div>

      <div className='contacts__icons'></div>
    </div>
  );
};

// AiFillSetting
// TiThMenu
