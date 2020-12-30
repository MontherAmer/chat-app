const { Contact, User } = require('../../models');
const { contactsList } = require('../../utils');

exports.isTyping = async ({ usersSocketsObj, io, senderId, contactId }) => {
  console.log('is typing', contactId);
  let from = await User.findById(senderId).select({ image: 1, name: 1 });
  let contact = await Contact.findById(contactId);
  await Promise.all(
    contact.users.map(async user => {
      if (String(user._id) !== String(senderId)) {
        io.to(usersSocketsObj[user]).emit('SOCKET_I_AM_TYPING', { contactId, from });
      }
    })
  );
  return;
};

exports.stopedTyping = async ({ usersSocketsObj, io, senderId, contactId }) => {
  console.log('stopedTyping ', contactId);
  let contact = await Contact.findById(contactId);
  await Promise.all(
    contact.users.map(async user => {
      if (String(user._id) !== String(senderId)) {
        io.to(usersSocketsObj[user]).emit('SOCKET_I_AM_STOP_TYPING', { contactId });
      }
    })
  );
  return;
};
