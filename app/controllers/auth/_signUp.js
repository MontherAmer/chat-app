const { User } = require('../../models');
const { errorHandler, createJWT, userDataRes } = require('../../utils');

// *
// * ─── SIGN UP NEW USER ───────────────────────────────────────────────────────────
// *

exports.store = async (req, res) => {
  try {
    let user = new User({ ...req.body });

    // if !email or password return error
    user = await user.save();

    // * create token
    let token = createJWT({ _id: user._id, email: user.email });

    let data = await userDataRes(user._id);
    res.cookie('ChAt_ApP_CoOkIeS', token);
    return res.send({ success: true, status: 200, data: data });
  } catch (err) {
    return errorHandler(err, res);
  }
};
