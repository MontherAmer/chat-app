const { makeOffline, makeOnline } = require('./userStatus');

const usersSocketsObj = {};

exports.socketControllers = (io, socket) => {
  // store userId and socket
  usersSocketsObj[socket.senderId] = socket.id;

  // handle user online
  socket.on('SET_USER_ON_LINE', () => makeOnline(usersSocketsObj, io, socket));
  socket.on('SET_USER_OFF_LINE', makeOffline);

  socket.on('disconnect', () => delete usersSocketsObj[socket.senderId]);
};
