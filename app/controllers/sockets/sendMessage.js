const { Contact } = require('../../models');
const { contactsList } = require('../../utils');

exports.sendMessage = async (usersSocketsObj, io, data) => {
  let contact = await Contact.findById(data.contactId);

  await Promise.all(
    contact.users.map(async user => {
      if (String(user._id) !== String(data.user_id)) {
        let list = await contactsList(user);
        io.to(usersSocketsObj[user]).emit('SOCKET_NEW_MESSAGE_CREATED', { contactId: contact._id, list, message: data.message });
      }
    })
  );
  return;
};
