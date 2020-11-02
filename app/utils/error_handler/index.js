// *
// * ─── HANDLE RESPONSE WHEN ERROR OCCURS ──────────────────────────────────────────
// *

exports.errorHandler = (err, res) => {
  return res.send({ success: false, status: 500, err });
};
