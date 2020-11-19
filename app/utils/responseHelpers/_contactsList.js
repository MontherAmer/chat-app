const { User } = require('../../models');

exports.contactsList = async user_id => {
  try {
    // * get populated array of user.contacts
    console.log('REACT LOGIN');
    let user = await User.findById(user_id)
      .select({ contacts: 1 })
      .populate({
        path: 'contacts',
        select: { type: 1, users: 1, name: 1, image: 1, onlyAdminCanMsg: 1, admins: 1, createdBy: 1 },
        options: { sort: { updatedAt: 1 } },
        populate: {
          path: 'users',
          select: { name: 1, online: 1, email: 1, image: 1 }
        }
      });

    console.log('user ', user);

    let data = user.contacts.map(contact => {
      if (contact.type === 'D') {
        return contact.users.filter(user => String(user._id) !== String(user_id))[0];
      }
    });

    console.log(data);

    // let data = user.contacts.map(contact =>
    //   contact.type === 'D'
    //     ?  {
    //         _id: contact._id,
    //         name: contact.friend.name,
    //         image: contact.friend.image,
    //         email: contact.friend.email
    //       }
    //     : {
    //         _id: contact._id,
    //         name: contact.group.name,
    //         image: contact.group.image
    //       }
    // );

    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
