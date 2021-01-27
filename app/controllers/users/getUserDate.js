const { User } = require('../../models');
const { errorHandler, createJWT, userDataRes } = require('../../utils');

/* -------------------------------------------------------------------------- */
/* -----------------------------GET user data-------------------------------- */
/* -------------------------------------------------------------------------- */

exports.getUserData = async (req, res) => {
  try {
    let { _id } = req.params;

    // * find user with req.email
    let user = await User.findById(_id);
    if (!user) return errorHandler({ unautherized: true, status: 403 }, res);

    // * create token
    let token = createJWT({ _id, email: user.email });

    let data = await userDataRes(_id);
    return res.send({ success: true, status: 200, data: { ...data, token } });
  } catch (err) {
    return errorHandler(err, res);
  }
};
