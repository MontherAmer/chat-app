/* -------------------------------------------------------------------------- */
/* ----------------exports utils helpers functions--------------------------- */
/* -------------------------------------------------------------------------- */

// * token functions
exports.createJWT = require('./tokens').createJWT;
exports.decodeJWT = require('./tokens').decodeJWT;
exports.getTokenFromHeader = require('./tokens').getTokenFromHeader;

// * response functions
exports.contactsList = require('./responseHelpers').contactsList;
exports.userDataRes = require('./responseHelpers').userDataRes;
exports.chatMessages = require('./responseHelpers').chatMessages;

// * other functions
exports.upload = require('./uploadFile');
exports.errorHandler = require('./errorHandler').errorHandler;
