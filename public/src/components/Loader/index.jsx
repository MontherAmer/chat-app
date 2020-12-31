import React from 'react';

export default ({ absolute }) => {
  return (
    <div className={`${absolute}` ? 'loader-relative' : 'loader'}>
      <div className='loading'>
        <div className='bounceball'></div>
        <div className='loader__text'>NOW LOADING</div>
      </div>
    </div>
  );
};
