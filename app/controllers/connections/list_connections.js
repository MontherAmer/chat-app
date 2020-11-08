const { User, Connection } = require('../../models');
const { errorHandler, connectionsList } = require('../../utils');

exports.list = async (req, res) => {
  try {
    let data = await connectionsList(req._id);
    return res.send({ success: true, status: 200, data });
  } catch (err) {
    return errorHandler(err, res);
  }
};
