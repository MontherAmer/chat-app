const { User } = require('../../models');
const { contactsList } = require('./_contactsList');

exports.userDataRes = async user_id => {
  try {
    let user = await User.findById(user_id).select({ email: 1, theme: 1, name: 1, language: 1, status: 1, image: 1 });

    let { _id, email, theme, name, language, status, image } = user;

    let contacts = await contactsList(user_id);
    return { _id, email, name, language, status, image, contacts, theme, app: 'Chat_app' };
  } catch (err) {}
};
