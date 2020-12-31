const { Message, Contact } = require('../../models');
const { errorHandler } = require('../../utils');
const { chatMessages } = require('../../utils');

/* -------------------------------------------------------------------------- */
/* ---------------------LIST CONTACT MESSAGES-------------------------------- */
/* -------------------------------------------------------------------------- */

exports.list = async (req, res) => {
  try {
    let { contactId, skip } = req.params;
    let messages = await chatMessages(contactId, req._id, parseInt(skip));
    return res.send({ success: true, status: 200, data: messages, append: skip == 0 ? false : true });
  } catch (err) {
    return errorHandler(err, res);
  }
};
