import React from 'react';

import { GrGoogle } from 'react-icons/gr';

export default () => {
  return (
    <a href='api/auth/google' className='google-login'>
      <GrGoogle />
      <p>Google</p>
    </a>
  );
};
