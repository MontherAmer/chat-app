const { User } = require('../../models');
const { contactsList } = require('./_contactsList');

exports.userDataRes = async user_id => {
  try {
    let user = await User.findById(user_id).select({ email: 1, theme: 1, name: 1, language: 1, image: 1 });
    console.log('image1111 ', user.image);
    let { _id, email, theme, name, language, image } = user;
    console.log('image22222 ', image);
    let connections = await contactsList(user_id);
    return { _id, email, name, language, image, connections, theme };
  } catch (err) {
    console.log(err);
  }
};
