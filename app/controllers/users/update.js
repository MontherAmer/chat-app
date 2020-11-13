const { User } = require('../../models');
const { errorHandler, userDataRes } = require('../../utils');

exports.update = async (req, res) => {
  try {
    let { _id } = req.params;
    let { name, removeImage, status, removeStatus } = req.body;
    console.log(' status ', status);
    // * find user with req._id
    let user = await User.findById(_id);
    if (!user) return errorsHandler('no user', res);

    // * handel update name
    if (name) user.name = name;

    // * handle update image
    if (req.file) user.image = req.file.location;
    if (removeImage) user.image = '';

    if (status) user.status = status;
    if (removeStatus) user.status = '';

    await user.save();

    let data = await userDataRes(_id);
    return res.send({ success: true, status: 200, data });
  } catch (err) {
    return errorHandler(err, res);
  }
};
