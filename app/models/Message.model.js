const mongoose = require('mongoose');

// * ─── MESSAGE SCHEMA AND MODEL ──────────────────────────────────────────────────────
const MessageSchema = new mongoose.Schema(
  {
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: { type: String, enum: ['TEXT', 'VIDEO', 'IMAGE'] },
    text: { type: String },
    attachment: { type: mongoose.Schema.Types.ObjectId, ref: 'Attachment' },
    seen: { type: Boolean, default: false },
    seenBy: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  },
  {
    timestamps: true
  }
);

exports.Message = mongoose.model('Message', MessageSchema);
