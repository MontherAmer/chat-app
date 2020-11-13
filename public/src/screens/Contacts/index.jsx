import React from 'react';

import ChatItem from './Contact';

const data = [
  {
    image: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
    online: true,
    lastMsg: 'ok then',
    time: '12:25',
    name: 'Monther'
  },
  {
    image: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
    online: true,
    lastMsg: 'ok then',
    time: '12:25',
    name: 'Monther'
  },
  {
    image: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
    online: true,
    lastMsg: 'ok then',
    time: '12:25',
    name: 'Monther'
  },
  {
    image: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
    online: true,
    lastMsg: 'ok then',
    time: '12:25',
    name: 'Monther'
  },
  {
    image: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
    online: false,
    lastMsg: 'ok then',
    time: '12:25',
    name: 'Monther'
  },
  {
    image: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
    online: false,
    lastMsg: 'ok then',
    time: '12:25',
    name: 'Monther'
  },
  {
    image: 'https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png',
    online: true,
    lastMsg: 'ok then',
    time: '12:25',
    name: 'Monther'
  }
];

export default () => {
  return (
    <div className='contacts'>
      <div className='contacts_header'>
        <h4>Chats</h4>
      </div>
      <div className='contact__thumbnails'>
        {data.map(item => (
          <ChatItem image={item.image} name={item.name} online={item.online} lastMsg={item.lastMsg} time={item.time} />
        ))}
      </div>
    </div>
  );
};