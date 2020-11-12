const { Message, Thread, Attachment } = require('../../models');
const { errorHandler, contactsList } = require('../../utils');

// * ─── CREATE NEW MESSAGE ───────────────────────────────────────────────────────────

exports.create = async (req, res) => {
  try {
    // let { threadId, text } = req.body;

    // let message = new Message({ from: threadId, text });
    // await message.save();

    // let attachment;
    // if (req.file) {
    //   attachment = new Attachment({ type: 'IMAGE', url: req.file.location });
    //   await attachment.save();
    // }

    return res.send({ success: true, status: 200, data: {} });
  } catch (err) {
    return errorHandler(err, res);
  }
};
