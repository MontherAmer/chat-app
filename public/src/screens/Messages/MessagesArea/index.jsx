import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { timeFormate } from '../../../utils';

import { RiUserLine, RiDeleteBinLine } from 'react-icons/ri';

export default () => {
  const { messages } = useSelector(state => state.messagesState);
  const { _id } = useSelector(state => state.userState);

  useEffect(() => {
    var ele = document.getElementById('scrollto');
    ele.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, []);

  return (
    <div className='messages__area'>
      {messages?.map(msg => (
        <div className={`message ${msg.from._id === _id ? 'sent' : 'recived'}`}>
          <div className={`message__image ${msg.from._id === _id ? 'sent' : 'recived'}`}>
            {msg.from.image ? <img src={msg.from.image} /> : <RiUserLine size={34} />}
          </div>
          <div className={`message__body ${msg.from._id === _id ? 'sent' : 'recived'}`}>
            <div className={`message__body__text ${msg.from._id === _id ? 'sent' : 'recived'}`}>
              <p className='message__main__text'>{msg.text}</p>
              {msg.attachment ? <img src={msg.attachment} /> : null}
              {msg.image ? <img src={URL.createObjectURL(msg?.image)} /> : null}
              <p className='time'>{timeFormate(msg.createdAt)}</p>
            </div>
            <div className={`message__body__from ${msg.from._id === _id ? 'sent' : 'recived'}`}>{msg.from.name}</div>
          </div>
        </div>
      ))}
      <div id='scrollto'></div>
    </div>
  );
};
