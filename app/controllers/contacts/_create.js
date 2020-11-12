const { User, Thread } = require('../../models');
const { errorHandler, contactsList } = require('../../utils');

// * ─── CREATE CONTACT ─────────────────────────────────────────────────────────────
// * only email is required in request body
exports.create = async (req, res) => {
  try {
    // * check for required data
    if (!req.body.email) return errorHandler(`email is required`, res);
    let friend = await User.findOne({ email: req.body.email });
    if (!friend) return errorHandler(`We send an invitation to ${req.body.email}`, res);

    // * if the the thread is allready created
    let thread = await Thread.find({ type: 'D', user: req._id, friend: friend._id });
    if (thread.length) {
      data = await contactsList(req._id);
      return res.send({ success: true, status: 200, data });
    }

    // * create two threads
    let thread1 = new Thread({ user: req._id, friend: friend._id });
    let thread2 = new Thread({ user: friend._id, friend: req._id });
    thread1 = await thread1.save();
    thread2 = await thread2.save();

    // * add threads _ids to users model
    await User.updateOne({ _id: req._id }, { $push: { contacts: thread1._id } });
    await User.updateOne({ _id: friend._id }, { $push: { contacts: thread2._id } });

    data = await contactsList(req._id);
    return res.send({ success: true, status: 200, data });
  } catch (err) {
    return errorHandler(err, res);
  }
};
