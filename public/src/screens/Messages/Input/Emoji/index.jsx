import React from 'react';
import Picker from 'emoji-picker-react';

export default ({ handleChoose }) => {
  const onEmojiClick = (event, emojiObject) => handleChoose(emojiObject.emoji);

  return (
    <div>
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
};
