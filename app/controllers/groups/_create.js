const { Group, User, Contact } = require('../../models');
const { errorHandler, contactsList } = require('../../utils');

// * ─── CREATE NEW GROUP ───────────────────────────────────────────────────────────

exports.create = async (req, res) => {
  try {
    let { name, users, onlyAdminCanMsg } = req.body;
    let image;
    users = JSON.parse(users);
    // add the user who make the request to users array and remove dublicated values
    users.push(req._id);

    users = users.filter((elem, i, arr) => {
      if (arr.indexOf(elem) === i) {
        return elem;
      }
    });

    if (req.file) image = req.file.location;

    // * create new group
    let contact = new Contact({ name, type: 'G', image, onlyAdminCanMsg, users, admins: [req._id], createdBy: req._id });

    contact = await contact.save();

    await User.updateMany({ _id: { $in: contact.users } }, { $push: { contacts: contact._id } });

    let data = await contactsList(req._id);
    return res.send({ success: true, status: 200, data });
  } catch (err) {
    return errorHandler(err, res);
  }
};
