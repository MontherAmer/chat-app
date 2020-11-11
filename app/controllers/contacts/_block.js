const { Contact } = require('../../models');
const { errorHandler, contactsList } = require('../../utils');

exports.block = async (req, res) => {
  try {
    // * update blocked value from null to _id of the user
    let contact = await Contact.findById(req.params._id);
    contact.blocked = req._id;
    await contact.save();
    let data = await contactsList(req._id);
    return res.send({ success: true, status: 200, data });
  } catch (err) {
    return errorHandler(err, res);
  }
};
