import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { showAlert, createMessage } from '../../../store/actions';
import { RiSendPlane2Fill, RiImageFill, RiCloseLine } from 'react-icons/ri';

export default ({ _id }) => {
  const [state, setState] = useState({});
  const dispatch = useDispatch();

  const handleUpload = e =>
    e.target.files[0].type.split('/')[0] === 'image'
      ? setState({ ...state, image: e.target.files[0] })
      : dispatch(showAlert({ message: 'Only images are accepted' }));

  const handleChange = e => setState({ ...state, text: e.target.value });

  const handleClick = async () => {
    console.log(_id);
    dispatch(createMessage({ _id, ...state }));
  };

  return (
    <div className='messages__send'>
      {/* text input */}
      <div className='messages--input'>
        <input type='text' placeholder='Enter Message...' value={state.text || ''} onChange={handleChange} />
        {state.image ? <img className='messages--image--preview' src={URL.createObjectURL(state.image)} /> : null}
        {state.image ? (
          <RiCloseLine
            className='messages--image--preview--close'
            title='Remove Image'
            onClick={() => setState({ ...state, image: null })}
          />
        ) : null}
      </div>

      {/* image upload container */}
      <label className='messages--image'>
        <RiImageFill />
        <input type='file' name='image' style={{ display: 'none' }} onChange={handleUpload} />
      </label>
      {/* send message button */}
      <div className='messages--button' onClick={handleClick}>
        <RiSendPlane2Fill />
      </div>
    </div>
  );
};
