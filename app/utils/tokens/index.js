const { sign, verify } = require('jsonwebtoken');

// *
// * ─── HANDLE JSON WEB TOKENS ─────────────────────────────────────────────────────
// *

const createJWT = ({ _id, email }) => {
  return sign({ _id, email }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '20d'
  });
};

const decodeJWT = async token => {
  try {
    const { _id, email } = await verify(token, process.env.ACCESS_TOKEN_SECRET);
    return _id ? { _id, email } : null;
  } catch (err) {
    return false;
  }
};

const getTokenFromHeader = async req => {
  const token = req.headers.authorization.split(' ')[1];
  if (!token) return { e: 'You are not allowed to do this request' };
  // let a = await decodeJWT(token);
  let { _id, email } = await decodeJWT(token);
  return { success: true, _id, email };
};

exports.createJWT = createJWT;
exports.decodeJWT = decodeJWT;
exports.getTokenFromHeader = getTokenFromHeader;
