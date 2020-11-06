const mongoose = require('mongoose');

// *
// * ─── Thread SCHEMA AND MODEL ──────────────────────────────────────────────────────
// *

const ThreadSchema = new mongoose.Schema(
  {
    // * thread type D:Direct  or G:Group
    type: { type: String, enum: ['D', 'G'] },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
  },
  {
    timestamps: true
  }
);

exports.Thread = mongoose.model('Thread', ThreadSchema);
