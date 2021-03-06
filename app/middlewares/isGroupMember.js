const { Group } = require('../models');
const { errorHandler } = require('../utils');

/* -------------------------------------------------------------------------- */
/* ------------------Check if user is group member--------------------------- */
/* -------------- should be use after isAdmin middleware--------------------- */
exports.isGroupMember = async (req, res, next) => {
  try {
    let isMember = false;
    let group = await Group.findById(req.params._id)
      .select({ contacts: 1 })
      .populate({
        path: 'contacts',
        select: { user: 1 }
      });

    group.contacts.map(contact => {
      if (String(req._id) === String(contact.user)) isMember = true;
    });

    return isMember ? next() : errorHandler({ errorMessage: `You are no longer member of this group`, status: 403 }, res);
  } catch (err) {
    return errorHandler(err, res);
  }
};
