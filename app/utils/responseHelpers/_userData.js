const { User } = require('../../models');
const { connectionsList } = require('./_connectionsList');

exports.userDataRes = async user_id => {
  console.log('user_id ', user_id);
  try {
    let user = await User.findById(user_id).select({ email: 1, theme: 1, name: 1, language: 1, image: 1 });
    let { _id, email, theme, name, language, image } = user;
    let connections = await connectionsList(user_id);

    return { _id, email, name, language, image, connections, theme };
  } catch (err) {
    console.log(err);
  }
};
