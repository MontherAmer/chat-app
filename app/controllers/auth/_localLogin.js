const { User } = require('../../models');
const { errorHandler, createJWT, userDataRes } = require('../../utils');

// *
// * ─── LOGIN FUNCTION ─────────────────────────────────────────────────────────────
// *

exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;

    // * find user with req.email
    let user = await User.findOne({ email, provider: 'local' });
    if (!user) return errorHandler('no user', res);

    // * check password match
    let isMatched = await user.comparePassword(password);
    if (!isMatched) return errorHandler('token does not matched', res);

    // * create token
    let _id = user._id;
    let token = createJWT({ _id, email });

    let data = await userDataRes(_id);
    res.cookie('ChAt_ApP_ToKeNs', token);
    return res.send({ success: true, status: 200, data: { ...data, token } });
  } catch (err) {
    return errorHandler(err, res);
  }
};
