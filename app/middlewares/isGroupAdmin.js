const { Group } = require('../models');
const { errorHandler } = require('../utils');

/* -------------------------------------------------------------------------- */
/* ------------------Check if user is group admin---------------------------- */
/* -------------- should be use after isAdmin middleware--------------------- */

exports.isGroupAdmin = async (req, res, next) => {
  try {
    let isAdmin = false;
    let group = await Group.findById(req.params._id).select({ admins: 1 });

    group.admins.map(admin => {
      if (String(req._id) === String(admin)) isAdmin = true;
    });

    return isAdmin ? next() : errorHandler({ errorMessage: `You are not allowed to update the group data`, status: 403 }, res);
  } catch (err) {
    return errorHandler(err, res);
  }
};
