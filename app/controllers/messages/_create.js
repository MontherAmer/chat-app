const { Message, Contact } = require('../../models');
const { errorHandler } = require('../../utils');
const { eventEmmiter } = require('../sockets');

// * ─── CREATE NEW MESSAGE ───────────────────────────────────────────────────────────

exports.create = async (req, res) => {
  try {
    let { contactId, text } = req.body;
    let type = 'TEXT';
    let attachment;
    if (req.file) {
      type = 'IMAGE';
      attachment = req.file.location;
    }

    let message = new Message({ type, attachment, text, from: req._id, seenBy: [req._id] });

    message = await message.save();

    message = await Message.findById(message._id).populate({
      path: 'from seenBy',
      select: { email: 1, name: 1, online: 1, image: 1 }
    });

    await Contact.updateOne({ _id: contactId }, { $push: { messages: message._id }, lastMessage: message._id });
    eventEmmiter.emit('NEW_MESSAGE_CREATED', { contactId, user_id: req._id, message });
    return res.send({ success: true, status: 200, data: message });
  } catch (err) {
    return errorHandler(err, res);
  }
};
