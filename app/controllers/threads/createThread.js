const { User, Thread } = require('../../models');
const { errorHandler, createJWT, threadsList } = require('../../utils');

// *
// * ─── LOGIN FUNCTION ─────────────────────────────────────────────────────────────
// *

exports.createThread = async (req, res) => {
  try {
    let friend = await User.findOne({ email: req.body.email });
    let thread = new Thread({ type: 'D', users: [req._id, friend._id] });
    thread = await thread.save();

    await User.updateMany({ _id: { $in: [req._id, friend._id] } }, { $push: { threads: thread._id } });

    let data = await threadsList(req._id);
    return res.send({ success: true, status: 200, data });
  } catch (err) {
    return errorHandler(err, res);
  }
};
