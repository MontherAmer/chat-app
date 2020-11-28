const { Contact } = require('../../models');
const { contactsList } = require('../../utils');

exports.sendMessage = async (usersSocketsObj, io, data) => {
  let contact = await Contact.findById(data.contactId);

  await Promise.all(
    contact.users.map(async user => {
      let list = await contactsList(user);
      io.to(usersSocketsObj[user]).emit('USER_RECIVE_NEW_MESSAGE', { contactId: contact._id, list, message: data.message });
    })
  );
  return;
};