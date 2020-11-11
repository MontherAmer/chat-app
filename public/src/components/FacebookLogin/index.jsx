import React from 'react';

import { GrFacebookOption } from 'react-icons/gr';

export default () => {
  return (
    <a href='api/auth/facebook' className='fb-login'>
      <GrFacebookOption />
      <p>Facebook</p>
    </a>
  );
};
