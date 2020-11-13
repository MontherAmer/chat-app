const vEmail = email => (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) ? false : true);

const vUserName = name => (name.length < 3 ? true : false);

const vPassword = password => (password.length < 6 ? true : false);

export const validateForm = ({ email, name, password, type }) => {
  let check = {
    email: email ? vEmail(email) : true,
    name: type === 'login' ? false : name ? vUserName(name) : true,
    password: password ? vPassword(password) : true
  };

  return check;
};

export const validateEmail = vEmail;
