const { User } = require('../models');
const { errorHandler, getTokenFromHeader } = require('../utils');

/* -------------------------------------------------------------------------- */
/* -------------------CHECH if user is autherized---------------------------- */
/* -------------------------------------------------------------------------- */

exports.isAuth = async (req, res, next) => {
  try {
    let { success, _id, email, e } = await getTokenFromHeader(req);

    if (!success) return errorHandler({ unautherized: true, status: 403 }, res);

    let user = await User.findById(_id);

    if (!user) return errorHandler({ unautherized: true, status: 403 }, res);

    req._id = _id;

    req.email = email;
    return next();
  } catch (err) {
    return errorHandler(err, res);
  }
};
