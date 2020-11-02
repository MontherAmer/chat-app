import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUp } from '../../store/actions';

export default () => {
  const [state, setState] = useState({});
  const dispatch = useDispatch();

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });

  const handleClick = () => dispatch(signUp(state));

  return (
    <div className='auth'>
      <div className='auth-container'>
        <h1 className='title3_txt c_gray'>Sign Up</h1>
        <input autoComplete='off' className='auth--input' placeholder='Email' type='text' name='email' onChange={handleChange} />
        <input autoComplete='off' className='auth--input' placeholder='Password' type='password' name='password' onChange={handleChange} />
        <input
          autoComplete='off'
          className='auth--input'
          placeholder='Confirm Password'
          type='password'
          name='password2'
          onChange={handleChange}
        />
        <button className='auth--button' onClick={handleClick}>
          Sign Up
        </button>
      </div>
    </div>
  );
};
