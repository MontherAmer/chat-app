const { User } = require('../../models');
const { errorHandler, createJWT } = require('../../utils');

exports.update = async (req, res) => {
  try {
    let { _id } = req.params;
    let { name, password, newPassword, image } = req.body;

    console.log('body ', req.body);
    if (req.file) console.log(req.file);
    // * find user with req._id
    let user = await User.findById(_id);
    if (!user) return errorsHandler('no user', res);
    // * handel update name
    user.name = name ? name : user.name;

    // * handle update image
    if (req.file) user.image = req.file.location;

    // * handle password reset
    if (req.password && req.newPassword) {
      // * check password match
      let isMatched = await user.comparePassword(password);
      if (!isMatched) return errorsHandler('err', res);
      user.password = newPassword;
    }

    await user.save();

    // * create token
    ({ email, name, language, online, image, _id } = user);
    let token = createJWT({ _id, email });

    return res.send({ success: true, status: 200, data: { email, name, language, online, _id, image, token } });
  } catch (err) {
    return errorHandler(err, res);
  }
};
