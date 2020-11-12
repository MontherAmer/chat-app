const mongoose = require('mongoose');

// * ─── ATTACHMENT SCHEMA AND MODEL ──────────────────────────────────────────────────────
const AttachmentSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ['IMAGE', 'VIDEO', 'FILE'] },
    url: { type: String }
  },
  {
    timestamps: true
  }
);

exports.Attachment = mongoose.model('Attachment', AttachmentSchema);
