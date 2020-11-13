import React, { useEffect, useState } from 'react';

import { RiRecordCircleLine } from 'react-icons/ri';

export default ({ _id, online }) => {
  return (
    <div className='profile__online__container'>
      <RiRecordCircleLine style={{ color: online ? '#317053' : '#b04742' }} />
      {online ? <p>&nbsp;Online </p> : <p>&nbsp;Offline </p>}
    </div>
  );
};
