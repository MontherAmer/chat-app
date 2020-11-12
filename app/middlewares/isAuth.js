const { User } = require('../models');
const { errorHandler, getTokenFromHeader } = require('../utils');

exports.isAuth = async (req, res, next) => {
  try {
    let { success, _id, email, e } = await getTokenFromHeader(req);

    if (!success) return errorHandler({ e }, res);

    let user = await User.findById(_id);

    if (!user) return errorHandler('no user2', res);

    req._id = _id;

    req.email = email;
    return next();
  } catch (err) {
    return errorHandler(err, res);
  }
};
