const { Contact } = require('../../models');

exports.chatMessages = async (contactId, userId) => {
  try {
    console.log(contactId);
    let { messages } = await Contact.findById(contactId)
      .select({ messages: 1 })
      .populate({
        path: 'messages',
        match: { deleted: { $ne: userId } },
        populate: { path: 'from seenBy', select: { email: 1, name: 1, online: 1, image: 1 } }
      });
    return messages;
  } catch (err) {
    console.log(err);
  }
};
