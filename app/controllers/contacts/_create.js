const { User, Contact } = require('../../models');
const { errorHandler, contactsList } = require('../../utils');
const mongoose = require('mongoose');

// * ─── CREATE CONTACT ─────────────────────────────────────────────────────────────
// * only email is required in request body
exports.create = async (req, res) => {
  try {
    console.log('reach create');
    // * check for required data
    if (!req.body.email) return errorHandler(`email is required`, res);
    let friend = await User.findOne({ email: req.body.email });
    if (!friend) return errorHandler(`We send an invitation to ${req.body.email}`, res);
    if (String(req._id) === String(friend._id)) return errorHandler(`You can't add yourself to contacts`);

    let contact = await Contact.findOne({ type: 'D', users: { $in: [req._id, friend._id] } });

    if (contact) {
      // should return data represent the contact
      return res.send('allready exist');
      // data = await contactsList(req._id);
      // return res.send({ success: true, status: 200, data });
    }

    contact = new Contact({ type: 'D', users: [req._id, friend._id] });

    contact = await contact.save();

    await User.updateMany({ _id: { $in: [req._id, friend._id] } }, { $push: { contacts: contact._id } });

    // data = await contactsList(req._id);
    return res.send({ success: true, status: 200, data: 'done' });
  } catch (err) {
    return errorHandler(err, res);
  }
};
