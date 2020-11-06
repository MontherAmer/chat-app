const { User } = require('../../models');

exports.connectionsList = async user_id => {
  try {
    let user = await User.findById(user_id)
      .select({ connections: 1 })
      .populate({
        path: 'connections',
        select: { users: 1, type: 1 },
        options: { sort: { updatedAt: 1 } },
        populate: {
          path: 'users',
          select: { name: 1, online: 1, image: 1 }
        }
      });
    console.log('user_id', user_id);
    let data = user.connections.map(contact =>
      contact.type === 'D'
        ? {
            _id: contact._id,
            name: contact.users.filter(user => String(user._id) !== String(user_id))[0].name,
            image: contact.users.filter(user => String(user._id) !== String(user_id))[0].image
          }
        : null
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};
