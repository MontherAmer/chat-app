const { User } = require('../../models');
const { errorHandler, createJWT, userDataRes } = require('../../utils');

// *
// * ─── SIGN UP NEW USER ───────────────────────────────────────────────────────────
// *

exports.store = async (req, res) => {
  try {
    let user = new User({ ...req.body });

    user = await user.save();

    // * create token
    let token = createJWT({ _id: user._id, email: user.email });

    let data = await userDataRes(user._id);

    return res.send({ success: true, status: 200, data: { ...data, token } });
  } catch (err) {
    console.log(err);
    return errorHandler(err, res);
  }
};
