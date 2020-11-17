const { Group, User, Thread } = require('../../models');
const { errorHandler, contactsList } = require('../../utils');

// * create thread between group and user and save it to user
const createThread = async (user, group) => {
  let thread = new Thread({ user, group, type: 'G' });
  let data = await thread.save();
  await User.updateOne({ _id: user }, { $push: { contacts: thread._id } });
  return data._id;
};

// * ─── CREATE NEW GROUP ───────────────────────────────────────────────────────────
// * {name: group name , image: group image, members: members _ids}

exports.create = async (req, res) => {
  try {
    console.log(req.body);
    let { name, members } = req.body;
    let image;

    members = JSON.parse(members);
    // add the user who make the request to members array and remove dublicated values
    members.push(req._id);

    members = members.filter((elem, i, arr) => {
      if (arr.indexOf(elem) === i) {
        return elem;
      }
    });

    if (req.file) image = req.file.location;

    // * create new group
    let group = new Group({ name, image, admins: [req._id], createdBy: req._id });

    group = await group.save();

    // * create threads between group and members and add them to group model
    threadsLists = await Promise.all(members.map((member, i) => createThread(member, group._id)));

    group.contacts = threadsLists;

    await group.save();

    let data = await contactsList(req._id);
    return res.send({ success: true, status: 200, data });
  } catch (err) {
    return errorHandler(err, res);
  }
};
