import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SocketContext } from '../../../context/SocketContext';
import { showAlert, createMessage } from '../../../store/actions';
import { RiSendPlane2Fill, RiImageFill, RiCloseLine, RiEmotionHappyLine } from 'react-icons/ri';

import Emoji from './Emoji';

export default ({ _id }) => {
  const [state, setState] = useState({ showEmojiPicket: false, contactId: '' });
  const currentUser = useSelector(state => state.userState);
  const dispatch = useDispatch();
  let { sendSocket } = useContext(SocketContext);

  useEffect(() => {
    if (state.contactId !== _id) sendSocket('SOCKET_I_AM_STOP_TYPING', { contactId: state.contactId });
    setState({ ...state, text: '', contactId: _id });
  }, [_id]);

  const handleUpload = e =>
    e.target.files[0].type.split('/')[0] === 'image'
      ? setState({ ...state, showEmojiPicket: false, image: e.target.files[0] })
      : dispatch(showAlert({ message: 'Only images are accepted' }));

  const handleChange = e => {
    e.target.value.length === 1 ? sendSocket('SOCKET_I_AM_TYPING', { contactId: _id }) : console.log('nothing');
    e.target.value.length === 0 ? sendSocket('SOCKET_I_AM_STOP_TYPING', { contactId: _id }) : console.log('nothing');

    setState({ ...state, showEmojiPicket: false, text: e.target.value });
  };

  const handleClick = async () => {
    dispatch(createMessage({ _id, currentUser, ...state }));
    setState({ showEmojiPicket: false, text: '', image: null });
    sendSocket('SOCKET_I_AM_STOP_TYPING', { contactId: _id });
  };

  const handleShowHideEmoji = () => setState({ ...state, showEmojiPicket: !state.showEmojiPicket });

  const handleEmojiChoose = emoji => setState({ ...state, text: `${state.text ? state.text : ''}${emoji}` });

  return (
    <div className={`messages__send ${state.image ? 'big' : ''}`}>
      {/* text input */}
      <div className='messages--input'>
        <input type='text' placeholder='Enter Message...' value={state.text || ''} onChange={handleChange} />
      </div>

      <div className='emoji__container'>
        {state.showEmojiPicket ? <Emoji handleChoose={handleEmojiChoose} /> : null}
        <RiEmotionHappyLine onClick={handleShowHideEmoji} />
      </div>

      <label className='messages--image'>
        <RiImageFill />
        <input type='file' name='image' style={{ display: 'none' }} onChange={handleUpload} />
      </label>
      {/* send message button */}
      <div className='messages--button' onClick={handleClick}>
        <RiSendPlane2Fill />
      </div>
      {state.image ? <img className='messages--image--preview' src={URL.createObjectURL(state.image)} /> : null}
      {state.image ? (
        <RiCloseLine className='messages--image--preview--close' title='Remove Image' onClick={() => setState({ ...state, image: null })} />
      ) : null}
    </div>
  );
};
