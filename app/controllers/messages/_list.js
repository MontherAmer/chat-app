const { Message, Contact } = require('../../models');
const { errorHandler } = require('../../utils');

// * ─── LIST CONTACT MESSAGES ───────────────────────────────────────────────────────────

exports.list = async (req, res) => {
  try {
    let { contactId } = req.params;
    let { messages } = await Contact.findById(contactId)
      .select({ messages: 1 })
      .populate({
        path: 'messages',
        match: { deleted: { $ne: req._id } },
        populate: { path: 'from seenBy', select: { email: 1, name: 1, online: 1, image: 1 } }
      });
    return res.send({ success: true, status: 200, data: messages });
  } catch (err) {
    return errorHandler(err, res);
  }
};
