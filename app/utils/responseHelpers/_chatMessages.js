const { Contact } = require('../../models');

exports.chatMessages = async (contactId, userId, skip) => {
  try {
    let { messages } = await Contact.findById(contactId)
      .select({ messages: 1 })
      .populate({
        path: 'messages',
        options: {
          skip: skip,
          limit: 20,
          sort: { createdAt: -1 }
        },
        match: { deleted: { $ne: userId } },
        populate: { path: 'from seenBy', select: { email: 1, name: 1, online: 1, image: 1 } }
      });

    return messages;
  } catch (err) {}
};
