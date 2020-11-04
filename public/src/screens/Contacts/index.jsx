import React from 'react';
import profile from '../../assets/images/profile';
import { BsPlusCircleFill } from 'react-icons/bs';

import ContactItem from '../../components/ContactItem';

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
  return (
    <div className='contacts'>
      {/* Contacts header */}
      <div className='contacts__header'>
        <div>
          <img src={profile} className='contact__img' />
          <p className='title'> Chats </p>
        </div>
        <BsPlusCircleFill className='contacts__menu' />
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
    </div>
  );
};
