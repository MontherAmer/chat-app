import React from 'react';

import Message from '../../components/Message';

let messages = [
  { text: 'hello my friend', sender: '123', time: '12:30' },
  { text: 'hello my friend', sender: '1232', time: '12:30' },
  { text: 'hello my friend', sender: '123', time: '12:30' },
  { text: 'hello my friend', sender: '1232', time: '12:30' },
  { text: 'hello my friend', sender: '123', time: '12:30' },
  { text: 'hello my friend', sender: '1232', time: '12:30' },
  { text: 'hello my friend', sender: '123', time: '12:30' },
  { text: 'hello my friend', sender: '1232', time: '12:30' },
  { text: 'hello my friend', sender: '123', time: '12:30' },
  { text: 'hello my friend', sender: '1232', time: '12:30' },
  { text: 'hello my friend', sender: '123', time: '12:30' },
  { text: 'hello my friend', sender: '1232', time: '12:30' },
  { text: 'hello my friend', sender: '123', time: '12:30' },
  { text: 'hello my friend', sender: '1232', time: '12:30' },
  { text: 'hello my friend', sender: '123', time: '12:30' },
  { text: 'hello my friend', sender: '1232', time: '12:30' },
  { text: 'hello my friend', sender: '123', time: '12:30' },
  { text: 'hello my friend', sender: '1232', time: '12:30' },
  { text: 'hello my friend', sender: '123', time: '12:30' },
  { text: 'hello my friend', sender: '1232', time: '12:30' },
  { text: 'hello my friend', sender: '123', time: '12:30' },
  { text: 'hello my friend', sender: '1232', time: '12:30' },
  { text: 'hello my friend', sender: '123', time: '12:30' },
  { text: 'hello my friend', sender: '1232', time: '12:30' },
  { text: 'hello my friend', sender: '123', time: '12:30' },
  { text: 'hello my friend', sender: '1232', time: '12:30' },
  { text: 'hello my friend', sender: '123', time: '12:30' },
  { text: 'hello my friend', sender: '1232', time: '12:30' }
];

export default () => {
  return (
    <div className='messages_wrraper'>
      <div className='messages'>
        {messages.map((msg, i) => (
          <Message item={msg} />
        ))}
      </div>
    </div>
  );
};
