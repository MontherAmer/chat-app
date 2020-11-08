const { User, Connection } = require('../../models');
const { errorHandler, connectionsList } = require('../../utils');

// *
// * ─── LOGIN FUNCTION ─────────────────────────────────────────────────────────────
// *

exports.createGroup = async (req, res) => {
  try {
    let { name, image, members } = req.body;
    let connection = new Connection({ type: 'G', name, image, createdBy: req._id, users: [req._id, ...members] });
    connection = await connection.save();

    await User.updateMany({ _id: { $in: [...members, req._id] } }, { $push: { connections: connection._id } });

    let data = await connectionsList(req._id);
    return res.send({ success: true, status: 200, data });
  } catch (err) {
    return errorHandler(err, res);
  }
};
