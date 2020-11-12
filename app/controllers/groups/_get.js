const { Group } = require('../../models');
const { errorHandler } = require('../../utils');

exports.get = async (req, res) => {
  try {
    let { _id } = req.params;

    let data = await Group.findById(_id)
      .populate({
        path: 'createdBy',
        select: { name: 1, email: 1, image: 1 }
      })
      .populate({
        path: 'admins',
        select: { name: 1, email: 1, image: 1 }
      })
      .populate({
        path: 'contacts',
        select: { user: 1, _id: 0 },
        populate: {
          path: 'user',
          select: { name: 1, email: 1, image: 1 }
        }
      });

    return res.send({ success: true, status: 200, data: data });
  } catch (err) {
    return errorHandler(err, res);
  }
};
