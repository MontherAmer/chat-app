const { Message, Attachment } = require('../../models');
const { errorHandler } = require('../../utils');

// * ─── CREATE NEW MESSAGE ───────────────────────────────────────────────────────────

exports.create = async (req, res) => {
  try {
    console.log('my messages', req.body);
    if (req.file) console.log('has file', req.file.location);
    return res.send({ success: true, status: 200 });
  } catch (err) {
    return errorHandler(err, res);
  }
};
