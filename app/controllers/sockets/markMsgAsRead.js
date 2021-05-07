const { Message } = require('../../models');
const { contactsList } = require('../../utils');
exports.markMsgAsRead = async ({ usersSocketsObj, io, senderId, msgs }) => {
  try {
    await Message.updateMany({ _id: { $in: msgs } }, { $push: { seenBy: senderId } });
    let data = await contactsList(senderId);
    io.to(usersSocketsObj[senderId]).emit('SOCKET_MARK_MASSEGAES_AS_READ', data);
  } catch (err) {}
};
