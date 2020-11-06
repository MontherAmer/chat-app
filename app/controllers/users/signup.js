const { User } = require('../../models');
const { errorHandler, createJWT } = require('../../utils');

// *
// * ─── SIGN UP NEW USER ───────────────────────────────────────────────────────────
// *

exports.store = async (req, res) => {
  try {
    let user = new User({ ...req.body });

    user = await user.save();

    let { email, name, language, online, _id, image } = user;
    let token = createJWT({ _id, email });
    return res.send({ success: true, data: { email, name, language, online, _id, image, token } });
  } catch (err) {
    console.log(err);
    return errorHandler(err, res);
  }
};
