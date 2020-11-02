import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../../store/actions';

export default () => {
  const [state, setState] = useState({});
  const dispatch = useDispatch();

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });

  const handleClick = () => dispatch(login(state));

  return (
    <div className='auth'>
      <div className='auth-container'>
        <h1 className='title3_txt c_gray'>Log In</h1>
        <input autoComplete='off' className='auth--input' placeholder='Email' type='text' name='email' onChange={handleChange} />
        <input autoComplete='off' className='auth--input' placeholder='Password' type='password' name='password' onChange={handleChange} />
        <button className='auth--button' onClick={handleClick}>
          Log In
        </button>
      </div>
    </div>
  );
};
