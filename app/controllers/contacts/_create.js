const { User, Contact } = require('../../models');
const { errorHandler, contactsList } = require('../../utils');

/* -------------------------------------------------------------------------- */
/* -----------------------------create contacts------------------------------ */
/* -------------------------------------------------------------------------- */

exports.create = async (req, res) => {
  try {
    // * check for required data
    if (!req.body.email) return errorHandler(`email is required`, res);
    let friend = await User.findOne({ email: req.body.email });
    if (!friend) return errorHandler({ errorMessage: `We send an invitation to ${req.body.email}`, status: 404 }, res);
    if (String(req._id) === String(friend._id))
      return errorHandler({ errorMessage: `You can't add yourself to contacts`, status: 400 }, res);

    // * the contact should be of type D and the users array should contain both user and friend _ids
    let contact = await Contact.findOne({ type: 'D', $and: [{ users: { $in: [req._id] } }, { users: { $in: [friend._id] } }] });

    if (contact) {
      contact.updatedAt = Date.now();
      await contact.save();
      data = await contactsList(req._id);
      return res.send({ success: true, status: 200, data });
    }

    contact = new Contact({ type: 'D', users: [req._id, friend._id] });

    contact = await contact.save();

    await User.updateMany({ _id: { $in: [req._id, friend._id] } }, { $push: { contacts: contact._id } });

    data = await contactsList(req._id);
    return res.send({ success: true, status: 200, data });
  } catch (err) {
    return errorHandler(err, res);
  }
};
