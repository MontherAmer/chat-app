import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Image from './Image';
import Name from './Name';

export default () => {
  const [state, setState] = useState({});
  const userDate = useSelector(state => state.userState);

  return (
    <div className='profile'>
      <Image _id={userDate._id} image={userDate.image} />
      <Name _id={userDate._id} name={userDate.name} />
    </div>
  );
};

// email
// name
// status
// online
