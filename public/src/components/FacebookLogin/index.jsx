import React from 'react';

import { GrFacebookOption } from 'react-icons/gr';

export default () => {
  return (
    <a href='api/auth/facebook' className='fb-login'>
      <GrFacebookOption />
      <div>
        <p>Facebook</p>
      </div>
    </a>
  );
};
