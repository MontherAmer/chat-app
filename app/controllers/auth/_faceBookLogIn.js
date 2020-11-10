const { User } = require('../../models');
const { errorHandler, createJWT } = require('../../utils');

//
// * ─── LOGIN WITH FB ACCOUNT ──────────────────────────────────────────────────────
//

exports.faceBookLogin = async (req, res) => {
  try {
    // * get user data from facebook
    let name = req.user.displayName || req.user.username || req.user.name.givenName;
    let provider = req.user.provider;
    let email = req.user.id + '@' + req.user.provider;
    let user = await User.findOne({ email });

    if (user) {
      // * user have account in DB
      let _id = user._id;
      let token = createJWT({ _id, email });
      res.cookie('ChAt_ApP_ToKeNs', token);
      return res.redirect(`/redirect/${token}/${user._id}`);
    } else {
      // * user does not have account in DB
      user = new User({ name, provider, email });
      user = await user.save();
      // * create token
      let token = createJWT({ _id: user._id, email: user.email });
      res.cookie('ChAt_ApP_ToKeNs', token);
      return res.redirect(`/redirect/${token}/${user._id}`);
    }
  } catch (err) {
    return errorHandler(err, res);
  }
};
