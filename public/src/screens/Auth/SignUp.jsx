import React, { useState } from 'react';
import { AiOutlineUser, AiFillLock } from 'react-icons/ai';

import Input from '../../components/Input';
import Button from '../../components/Button';
import GoogleLogin from '../../components/GoogleLogin';
import FacebookLogin from '../../components/FacebookLogin';

export default () => {
  const [state, setState] = useState({});

  const handleChange = e => setState({ ...state, [e.target.name]: e.target.value });

  const handleLogin = () => console.log('sajfd');

  return (
    <div className='auth'>
      <h4>Sign up</h4>
      <p>Get your account now.</p>
      <div className='auth-form'>
        <Input label='Email' value={state.email || ''} name='email' type='e' onChange={handleChange}>
          <AiOutlineUser />
        </Input>
        <Input label='Username' value={state.name || ''} name='name' type='t' onChange={handleChange}>
          <AiOutlineUser />
        </Input>
        <Input label='Password' value={state.password || ''} name='password' type='p' onChange={handleChange}>
          <AiFillLock />
        </Input>
        <Button label='Sign up' onClick={handleLogin} />
      </div>
      <span className='auth__span'>
        Already have an account?&nbsp;<a href='/login'>Signin</a>
      </span>

      <div className='separator'>OR</div>

      <div className='social_login'>
        <GoogleLogin />
        <FacebookLogin />
      </div>
    </div>
  );
};
