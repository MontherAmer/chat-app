const { makeOffline, makeOnline } = require('./userStatus');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const eventEmmiter = new MyEmitter();

const usersSocketsObj = {};

exports.socketControllers = (io, socket) => {
  // store userId and socket
  usersSocketsObj[socket.senderId] = socket.id;

  // handle user online
  socket.on('SET_USER_ON_LINE', () => makeOnline(usersSocketsObj, io, socket));
  socket.on('SET_USER_OFF_LINE', makeOffline);

  socket.on('disconnect', () => delete usersSocketsObj[socket.senderId]);

  eventEmmiter.on('NEW_MESSAGE_CREATED', data => socket.emit('USER_RECIVE_NEW_MESSAGE', data));
};

exports.eventEmmiter = eventEmmiter;
