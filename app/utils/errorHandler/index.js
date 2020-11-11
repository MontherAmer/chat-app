// *
// * ─── HANDLE RESPONSE WHEN ERROR OCCURS ──────────────────────────────────────────
// *

const handleMongooseErrors = err => {
  // * errors for unique values in database
  if (err.keyValue && err.keyPattern) {
    let [first] = Object.keys(err.keyValue);
    return `${err.keyValue[first]} is allready used`;
  }
};

exports.errorHandler = (err, res) => {
  console.log('EEEEEEEEE ', err);
  if (err.code === 11000) {
    let error = handleMongooseErrors(err);
    return res.send({ success: false, status: 500, err: error });
  }
  return res.send({ success: false, status: 500, err });
};
