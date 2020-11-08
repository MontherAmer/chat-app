const { connections } = require('mongoose');
const { User, Connection } = require('../../models');
const { errorHandler, connectionsList } = require('../../utils');

// *
// * ─── LOGIN FUNCTION ─────────────────────────────────────────────────────────────
// *

exports.createConnection = async (req, res) => {
  try {
    let data;
    let friend = await User.findOne({ email: req.body.email });

    // * check if the connection is exist
    let connection = await Connection.find({ type: 'D', users: { $in: [(req._id, friend._id)] } });
    if (connection.length) {
      data = await connectionsList(req._id);
      return res.send({ success: true, status: 200, data });
    }

    let contact = new Connection({ type: 'D', users: [req._id, friend._id] });
    contact = await contact.save();

    await User.updateMany({ _id: { $in: [req._id, friend._id] } }, { $push: { connections: contact._id } });

    data = await connectionsList(req._id);
    return res.send({ success: true, status: 200, data });
  } catch (err) {
    return errorHandler(err, res);
  }
};
