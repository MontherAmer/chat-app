const mongoose = require('mongoose');

// * ─── MESSAGE SCHEMA AND MODEL ──────────────────────────────────────────────────────
const MessageSchema = new mongoose.Schema(
  {
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'Thread', required: true },
    text: { type: String },
    attachment: { type: mongoose.Schema.Types.ObjectId, ref: 'Attachment' }
  },
  {
    timestamps: true
  }
);

exports.Message = mongoose.model('Message', MessageSchema);
