const { makeUserOffline, makeUserOnline } = require('./userStatus');
const { sendMessage } = require('./sendMessage');
const { markMsgAsRead } = require('./markMsgAsRead');
const { isTyping, stopedTyping } = require('./typing');
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const eventEmmiter = new MyEmitter();

const usersSocketsObj = {};
let tempIO;

exports.socketControllers = (io, socket) => {
  tempIO = io;

  // store userId and socket
  usersSocketsObj[socket.senderId] = socket.id;

  // handle user online
  socket.on('SET_USER_ON_LINE', () => makeUserOnline(usersSocketsObj, io, socket));
  socket.on('SET_USER_OFF_LINE', makeUserOffline);

  socket.on('SOCKET_I_AM_TYPING', ({ contactId }) => isTyping({ usersSocketsObj, io, senderId: socket.senderId, contactId }));
  socket.on('SOCKET_I_AM_STOP_TYPING', ({ contactId }) => stopedTyping({ usersSocketsObj, io, senderId: socket.senderId, contactId }));

  socket.on('SOCKET_MARK_MASSEGAES_AS_READ', ({ msgs }) => markMsgAsRead({ usersSocketsObj, io, senderId: socket.senderId, msgs }));

  socket.on('disconnect', () => delete usersSocketsObj[socket.senderId]);
};

// handle messages
eventEmmiter.on('EVEVT_NEW_MESSAGE_CREATED', data => sendMessage(usersSocketsObj, tempIO, data));

exports.eventEmmiter = eventEmmiter;
