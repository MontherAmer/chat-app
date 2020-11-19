import React from 'react';

export default ({ label, name, checked, handleClick }) => {
  return (
    <div className='toggle_button'>
      <label className='switch'>
        <input name={name} type='checkbox' onChange={handleClick} checked={checked} />
        <span className='slider round'></span>
      </label>
      <p>{label}</p>
    </div>
  );
};
