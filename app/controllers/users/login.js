const { User } = require('../../models');
const { errorHandler, createJWT, userDataRes } = require('../../utils');

// *
// * ─── LOGIN FUNCTION ─────────────────────────────────────────────────────────────
// *

exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;

    // * find user with req.email
    let user = await User.findOne({ email });
    if (!user) return errorHandler('{ e: 1 }', res);

    // * check password match
    let isMatched = await user.comparePassword(password);
    if (!isMatched) return errorHandler('{ e: 1 }', res);

    // * create token
    let _id = user._id;
    let token = createJWT({ _id, email });

    let data = await userDataRes(_id);

    return res.send({ success: true, status: 200, data: { ...data, token } });
  } catch (err) {
    return errorHandler(err, res);
  }
};
