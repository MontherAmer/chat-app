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
        let data = contact.users.filter(user => String(user._id) !== String(user_id))[0];
        return {
          _id: data._id,
          name: data.name,
          email: data.email,
          image: data.image,
          date: data.updatedAt,
          online: data.online,
          type: 'D',
          usersIds: [user._id]
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
          usersIds: contact.users.filter(item => item._id)
        };
      }
    });

    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
