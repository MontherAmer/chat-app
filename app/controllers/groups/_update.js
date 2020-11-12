const { Group } = require('../../models');
const { errorHandler, contactsList } = require('../../utils');

// // * create thread between group and user and save it to user
// const createThread = async (user, group) => {
//   let thread = new Thread({ user, group, type: 'G' });
//   let data = await thread.save();
//   await User.updateOne({ _id: user }, { $push: { contacts: thread._id } });
//   return data._id;
// };

exports.update = async (req, res) => {
  try {
    let { name, members } = req.body;

    let group = await Group.findById(req.params._id);

    // * update name
    if (name) group.name = name;
    // * update image
    if (req.file) group.image = req.file.location;
    // * add new member/s
    // if(members) {
    //   createThread()
    // }

    return res.send({ success: true, status: 200, data: {} });
  } catch (err) {
    return errorHandler(err, res);
  }
};
