const { User } = require('../../models');

exports.contactsList = async user_id => {
  try {
    // * get populated array of user.contacts

    // let user = await User.findById(user_id)
    //   .select({ contacts: 1 })
    //   .populate({
    //     path: 'contacts',
    //     select: { friend: 1, name: 1, image: 1, type: 1 },
    //     options: { sort: { updatedAt: 1 } },
    //     populate: {
    //       path: 'friend group',
    //       select: { name: 1, online: 1, email: 1, image: 1 }
    //     }
    //   });

    // let data = user.contacts.map(contact =>
    //   contact.type === 'D'
    //     ? {
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
