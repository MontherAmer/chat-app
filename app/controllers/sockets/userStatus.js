const { User } = require('../../models');

exports.makeUserOnline = async (usersSocketsObj, io, socket) => {
  let { senderId, id } = socket;

  // * get user data to check if the user is online allready(for front end even the home page refresh will send new socket)
  let user = await User.findById(senderId)
    .select({ contacts: 1, online: 1 })
    .populate({
      path: 'contacts',
      model: 'Contact',
      select: { users: 1 },
      populate: {
        path: 'users',
        select: { _id: 1 }
      }
    });
  // * if the user is online then no need to send socket of update the value
  if (user.online) return;

  // * else
  user.online = true;
  user.save();

  // * get sockets for users have connections with the user and they are allready online
  let usersSockets = [];
  user.contacts.map(contacts =>
    contacts.users.map(user =>
      String(user._id) !== String(senderId) && usersSocketsObj[user._id] && !usersSockets.includes(user._id)
        ? usersSockets.push(user._id)
        : null
    )
  );
  // * emit the event
  return usersSockets.map(item => io.to(usersSocketsObj[item]).emit('USER_TOGGLE_ON_OFF_LINE', { user_id: item, online: true }));
};

exports.makeUserOffline = async (usersSocketsObj, io, socket) => {
  let { senderId, id } = socket;

  // * get user data to check if the user is online allready(for front end even the home page refresh will send new socket)
  let user = await User.findById(senderId)
    .select({ contacts: 1, online: 1 })
    .populate({
      path: 'contacts',
      model: 'Contact',
      select: { users: 1 },
      populate: {
        path: 'users',
        select: { _id: 1 }
      }
    });
  // * if the user is online then no need to send socket of update the value
  if (!user.online) return;

  // * else
  user.online = false;
  user.save();

  // * get sockets for users have connections with the user and they are allready online
  let usersSockets = [];
  user.contacts.map(contacts =>
    contacts.users.map(user =>
      String(user._id) !== String(senderId) && usersSocketsObj[user._id] && !usersSockets.includes(user._id)
        ? usersSockets.push(user._id)
        : null
    )
  );
  // * emit the event
  return usersSockets.map(item => io.to(usersSocketsObj[item]).emit('USER_TOGGLE_ON_OFF_LINE', { user_id: item, online: false }));
};
