const mongoose = require('mongoose');

// *
// * ─── MESSAGE SCHEMA AND MODEL ──────────────────────────────────────────────────────
// *

const MessageSchema = new mongoose.Schema(
  {
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    to: { type: mongoose.Schema.Types.ObjectId, ref: 'Connection', required: true },
    body: { type: String, required: true }
  },
  {
    timestamps: true
  }
);

exports.Message = mongoose.model('Message', MessageSchema);
