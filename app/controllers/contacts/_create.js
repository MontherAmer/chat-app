const { User, Contact } = require('../../models');
const { errorHandler, contactsList } = require('../../utils');

// * ─── CREATE CONTACT ─────────────────────────────────────────────────────────────
// * only email is required in request body
exports.create = async (req, res) => {
  try {
    let data;
    if (!req.body.email) return errorHandler(`email is required`, res);
    let friend = await User.findOne({ email: req.body.email });
    if (!friend) return errorHandler(`We send an invitation to ${req.body.email}`, res);
    // * check if the contact is exist
    // * if the type equal D and the two users _ids is exist in users array
    // * the contact is allready there (if the two user is in one group the type will be G)
    let contactArr = await Contact.find({ type: 'D', users: { $in: [(req._id, friend._id)] } });
    if (contactArr.length) {
      data = await contactsList(req._id);
      return res.send({ success: true, status: 200, data });
    }

    // * create contact
    let contact = new Contact({ type: 'D', users: [req._id, friend._id] });
    contact = await contact.save();

    // * add the contact to user model
    await User.updateMany({ _id: { $in: [req._id, friend._id] } }, { $push: { contacts: contact._id } });

    // * add new contacts array to respons
    data = await contactsList(req._id);
    return res.send({ success: true, status: 200, data });
  } catch (err) {
    return errorHandler(err, res);
  }
};
