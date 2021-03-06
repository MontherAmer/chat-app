import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listMessages } from '../../../store/actions';
import { timeFormate } from '../../../utils';
import { SocketContext } from '../../../context/SocketContext';

import profileImage from '../../../assets/images/profile.png';
import Typing from '../../../components/Typing';
import Loader from '../../../components/Loader';
export default () => {
  const dispatch = useDispatch();
  let { sendSocket } = useContext(SocketContext);
  const [state, setState] = useState({ firstLoad: true });
  const { messages } = useSelector(state => state.messagesState);
  const { _id } = useSelector(state => state.userState);
  const { activeChat } = useSelector(state => state.messagesState);

  useEffect(() => {
    setState({ ...state, firstLoad: true, showLoader: false });
  }, [activeChat._id]);

  useEffect(() => {
    if (state.firstLoad || state.messagesLength === messages.length + 1) {
      var ele = document.getElementById('scrollto');
      ele.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
      setState({ ...state, firstLoad: false });
    }
    if (activeChat?.unreadMessages?.length) sendSocket('SOCKET_MARK_MASSEGAES_AS_READ', { msgs: activeChat.unreadMessages });
    setState({ ...state, messagesLength: messages.length });
  }, [messages]);

  const handleScroll = async () => {
    let el = document.getElementById('messages__area');
    if (el?.scrollTop === 0) {
      setState({ ...state, showLoader: true });
      await dispatch(listMessages(activeChat._id, messages.length));
      setState({ ...state, showLoader: false });
      let el = document.getElementById('messages__area');
      el.scrollTop = 100;
    }
  };

  return (
    <div className='messages__area' id='messages__area' onScroll={handleScroll}>
      <div className='message_loader_container'>{state.showLoader ? <Loader absolute={true} /> : null}</div>
      {messages?.map((msg, i) => (
        <div key={i} className={`message ${msg.from._id === _id ? 'sent' : 'recived'}`}>
          <div className={`message__image ${msg.from._id === _id ? 'sent' : 'recived'}`}>
            {msg.from.image ? <img src={msg.from.image} /> : <img src={profileImage} />}
          </div>
          <div className={`message__body ${msg.from._id === _id ? 'sent' : 'recived'}`}>
            <div className={`message__body__text ${msg.from._id === _id ? 'sent' : 'recived'}`}>
              {msg.typing ? <Typing /> : <p className='message__main__text'>{msg.text}</p>}
              {msg.attachment ? <img src={msg.attachment} /> : null}
              {msg?.image ? <img src={URL.createObjectURL(msg?.image)} /> : null}
              {msg.typing ? null : <p className='time'>{timeFormate(msg.createdAt)}</p>}
            </div>
            <div className={`message__body__from ${msg.from._id === _id ? 'sent' : 'recived'}`}>{msg.from.name}</div>
          </div>
        </div>
      ))}
      <div id='scrollto'></div>
    </div>
  );
};
