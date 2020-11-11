import React from 'react';

// * type casses
const casses = {
  t: 'text',
  e: 'email',
  p: 'password'
};

export default ({ label, value, name, type, onChange, children, wrong }) => {
  return (
    <div className='input'>
      <label> {label} </label>
      <div className='input__icon'>{children}</div>
      <input
        type={casses[type]}
        autoComplete='off'
        placeholder={`Enter ${label}`}
        value={value}
        onChange={onChange}
        name={name}
        className={`${wrong ? (wrong[name] ? 'wrong' : '') : ''}`}
      />
    </div>
  );
};
