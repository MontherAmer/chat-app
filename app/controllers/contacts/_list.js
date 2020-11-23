const { errorHandler, contactsList } = require('../../utils');

exports.list = async (req, res) => {
  try {
    let data = await contactsList(req._id);
    data.token = token;
    return res.send({ success: true, status: 200, data });
  } catch (err) {
    return errorHandler(err, res);
  }
};
