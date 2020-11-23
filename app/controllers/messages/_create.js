const { Message, Contact } = require('../../models');
const { errorHandler } = require('../../utils');

// * ─── CREATE NEW MESSAGE ───────────────────────────────────────────────────────────

exports.create = async (req, res) => {
  try {
    let { contactId, text } = req.body;
    console.log('my messages', contactId, text);
    let type = 'TEXT';
    let attachment;
    if (req.file) {
      type = 'IMAGE';
      attachment = req.file.location;
    }

    let message = new Message({ type, attachment, text, from: req._id });

    message = await message.save();

    await Contact.updateOne({ _id: contactId }, { $push: { messages: message._id } });

    return res.send({ success: true, status: 200 });
  } catch (err) {
    return errorHandler(err, res);
  }
};
