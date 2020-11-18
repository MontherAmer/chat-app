const { Message, Thread, Attachment } = require('../../models');
const { errorHandler } = require('../../utils');

// * ─── CREATE NEW MESSAGE ───────────────────────────────────────────────────────────

exports.create = async (req, res) => {
  try {
    console.log('my messages');

    return res.send({ success: true, status: 200, data: {} });
  } catch (err) {
    return errorHandler(err, res);
  }
};
