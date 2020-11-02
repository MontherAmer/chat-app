const { User } = require('../../models');
const { errorHandler, createJWT } = require('../../utils');

// *
// * ─── LOGIN FUNCTION ─────────────────────────────────────────────────────────────
// *

exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;

    // * find user with req.email
    let user = await User.findOne({ email });
    if (!user) return errorsHandler({ e: 1 }, res);

    // * check password match
    let isMatched = await user.comparePassword(password);
    if (!isMatched) return errorsHandler({ e: 1 }, res);

    // * create token
    ({ _id, email } = user);
    let token = createJWT({ _id, email });

    return res.send({ success: true, status: 200, data: { _id, email, token } });
  } catch (err) {
    return errorHandler(err, res);
  }
};
