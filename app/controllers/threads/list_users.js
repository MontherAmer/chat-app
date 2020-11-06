const { User, Thread } = require('../../models');
const { errorHandler, connectionsList } = require('../../utils');

exports.listUsers = async (req, res) => {
  try {
    let user = await User.findById(req._id)
      .select({ connections: 1 })
      .populate({
        path: 'connections',
        select: { users: 1, type: 1 },
        options: { sort: { updatedAt: 1 } },
        populate: {
          path: 'users',
          select: { name: 1, online: 1, email: 1 }
        }
      });

    let data = user.connections.map(contact =>
      contact.type === 'D'
        ? {
            _id: contact.users.filter(user => String(user._id) !== String(req._id))[0]._id,
            name: contact.users.filter(user => String(user._id) !== String(req._id))[0].name,
            email: contact.users.filter(user => String(user._id) !== String(req._id))[0].email
          }
        : null
    );

    return res.send({ success: true, status: 200, data: data.filter(item => item !== null) });
  } catch (err) {
    return errorHandler(err, res);
  }
};
