const { User } = require('../../models');
exports.connectionsList = async user_id => {
  try {
    let user = await User.findById(user_id).populate({
      path: 'threads',
      options: { sort: { updatedAt: 1 } }
    });

    return user.threads;
  } catch (err) {
    console.log(err);
  }
};
