const { User } = require('../../models');

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
        populate: {
          path: 'users',
          select: { name: 1, online: 1, email: 1, image: 1 }
        }
      });
    let data = user.contacts;

    data = data.map(contact => {
      if (contact.type === 'D') {
        return { date: contact.updatedAt, ...contact.users.filter(user => String(user._id) !== String(user_id))[0]._doc };
      } else {
        return {
          _id: contact._id,
          name: contact.name,
          image: contact.image,
          onlyAdminCanMsg: contact.onlyAdminCanMsg,
          createdBy: contact.createdBy,
          admins: contact.admins,
          updatedAt: contact.updatedAt,
          online: true
        };
      }
    });

    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
