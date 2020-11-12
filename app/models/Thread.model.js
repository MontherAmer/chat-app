const mongoose = require('mongoose');

// * ─── THREAD SCHEMA AND MODEL ──────────────────────────────────────────────────────
const ThreadSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    friend: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    group: { type: mongoose.Schema.Types.ObjectId, ref: 'Group' },
    messages: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
    threadType: { type: String, enum: ['G', 'D'], default: 'D' },
    blocked: { type: Boolean, default: false }
  },
  {
    timestamps: true
  }
);

exports.Thread = mongoose.model('Thread', ThreadSchema);
