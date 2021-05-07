const { User } = require('../../models');
const { chatMessages } = require('./_chatMessages');
exports.contactsList = async user_id => {
  try {
    // * get populated array of user.contacts
    let user = await User.findById(user_id)
      .select({ contacts: 1 })
      .populate({
        path: 'contacts',
        model: 'Contact',
        select: { type: 1, users: 1, name: 1, image: 1, onlyAdminCanMsg: 1, admins: 1, createdBy: 1, updatedAt: 1 },
        options: { sort: { updatedAt: -1 } },
        populate: [
          {
            path: 'users',
            select: { name: 1, online: 1, email: 1, image: 1 }
          },
          {
            path: 'messages',
            match: { seenBy: { $ne: user_id } }
          },
          {
            path: 'lastMessage',
            select: { type: 1, text: 1, createdAt: 1 }
          }
        ]
      });
    let data = user.contacts;
    data = Promise.all(
      data.map(async contact => {
        if (contact.type === 'D') {
          let data = contact.users.filter(user => String(user._id) !== String(user_id))[0];
          return {
            _id: contact._id,
            name: data.name,
            email: data.email,
            image: data.image,
            date: data.updatedAt,
            online: data.online,
            type: 'D',
            usersIds: [user._id],
            lastMessage: contact.lastMessage,
            unreadMessages: contact.messages.map(msg => msg._id),
            messages: await chatMessages(contact._id, user_id, 0)
          };
        } else {
          return {
            _id: contact._id,
            name: contact.name,
            image: contact.image,
            onlyAdminCanMsg: contact.onlyAdminCanMsg,
            createdBy: contact.createdBy,
            admins: contact.admins,
            date: contact.updatedAt,
            online: contact.users.filter(item => item.online && String(item._id) !== String(user_id)).length ? true : false,
            type: 'G',
            usersIds: contact.users.filter(item => item._id),
            lastMessage: contact.lastMessage,
            unreadMessages: contact.messages.map(msg => msg._id),
            messages: await chatMessages(contact._id, user_id, 0)
          };
        }
      })
    );

    return data;
  } catch (err) {
    return [];
  }
};
