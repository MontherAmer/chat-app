//
// * ─── EXPORT AUTH CONTROLLERS ────────────────────────────────────────────────────
//

exports.signUp = require('./_signUp').store;
exports.localLogIn = require('./_localLogin').login;
exports.googleLogIn = require('./_googleLogIn').googleLogin;
exports.faceBookLogIn = require('./_faceBookLogIn').faceBookLogin;
