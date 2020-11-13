import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Image from './Image';
import Name from './Name';
import Online from './Online';
import Status from './Status';

export default () => {
  const [state, setState] = useState({});
  const userDate = useSelector(state => state.userState);

  return (
    <div className='profile'>
      <Image image={userDate.image} />
      <Name name={userDate.name} />
      <Online online={userDate.online} />
      <Status status={userDate.status} />
    </div>
  );
};

// email
// name
// status
// online
//
