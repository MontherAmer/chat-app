import React, { useState } from 'react';

import Input from '../Input';

import { RiUserLine } from 'react-icons/ri';

export default ({ options, choose }) => {
  const [state, setState] = useState({ choosenOption: {}, showOptions: false });

  const handleChange = e => setState({ [e.target.name]: e.target.value });

  const handleChoose = user => {
    setState({ ...state, text: '' });
    choose(user);
  };

  // * handle filter options when user start typing
  const filterOptions = str => {
    let filterdOptions = options.filter(option => option.email.includes(str) || option.name.includes(str));
    return filterdOptions;
  };

  return (
    <div className='custom-select'>
      <Input
        label='Type friend email or name'
        value={state.text || ''}
        name='text'
        type='t'
        onChange={handleChange}
        children={<RiUserLine />}
      />
      {state.text ? (
        <div className='select--options'>
          {filterOptions(state.text || '').map(user => (
            <div className='contact' onClick={() => handleChoose(user)} key={user._id}>
              <div className='contact__image'>{user.image ? <img src={user.image} /> : <RiUserLine />}</div>
              <div className='contact__data'>
                <h4 className='contact__name'>{user.name}</h4>
                <p className='contact__msg'>{user.email}</p>
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};
