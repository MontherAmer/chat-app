const validateEmail = email => (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) ? false : true);

const validateUserName = name => (name.length < 3 ? true : false);

const validatePassword = password => (password.length < 6 ? true : false);

export const validateForm = ({ email, name, password, type }) => {
  let check = {
    email: email ? validateEmail(email) : true,
    name: type === 'login' ? false : name ? validateUserName(name) : true,
    password: password ? validatePassword(password) : true
  };

  return check;
};
