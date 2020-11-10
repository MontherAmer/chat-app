const { User } = require('../../models');
const { errorHandler, createJWT, userDataRes } = require('../../utils');

exports.googleLogin = async (req, res) => {
  try {
    // * get data from google
    let name = req.user.displayName;
    let image = req.user.photos[0].value;
    let provider = req.user.provider;
    let email = req.user.emails[0].value || req.user.id + '@' + provider;
    // * check if user signed up before
    let user = await User.findOne({ email });
    if (user) {
      // * user have account in DB
      let _id = user._id;
      let token = createJWT({ _id, email });
      res.cookie('ChAt_ApP_ToKeNs', token);
      return res.redirect(`/redirect/${token}/${user._id}`);
    } else {
      // * user does not have account in DB
      user = new User({ name, image, provider, email });
      user = await user.save();
      let token = createJWT({ _id: user._id, email: user.email });
      res.cookie('ChAt_ApP_ToKeNs', token);
      return res.redirect(`/redirect/${token}/${user._id}`);
    }
  } catch (err) {
    return errorHandler(err, res);
  }
};
