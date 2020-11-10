import React, { useState } from 'react';
import { AiOutlineUser, AiFillLock } from 'react-icons/ai';

import Input from '../../components/Input';
import Button from '../../components/Button';

export default () => {
  const [state, setState] = useState({});

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });

  const handleLogin = () => console.log('sajfd');

  return (
    <div className='auth'>
      <h4>Sign in</h4>
      <p>Sign in to continue.</p>
      <div className='auth-form'>
        <Input label='Email' value={state.email || ''} name='email' type='e' onChange={handleChange}>
          <AiOutlineUser />
        </Input>
        <Input label='Password' value={state.password || ''} name='password' type='p' onChange={handleChange}>
          <AiFillLock />
        </Input>
        <Button label='Sign up' onClick={handleLogin} />
      </div>
      <span className='auth__span'>
        Don't have an account?&nbsp;<a href='/signup'>Signup now</a>
      </span>
    </div>
  );
};
