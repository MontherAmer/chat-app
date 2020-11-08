const mongoose = require('mongoose');

// *
// * ─── CONNECTION SCHEMA AND MODEL ──────────────────────────────────────────────────────
// *

const ConnectionSchema = new mongoose.Schema(
  {
    name: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // * Connection type D:Direct  or G:Group
    type: { type: String, enum: ['D', 'G'] },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
    image: {
      type: String,
      default: 'https://adsonwheelzstorage.s3.amazonaws.com/e6f98df2-7f40-4a88-a269-be65fe79f9ac.png'
    }
  },

  {
    timestamps: true
  }
);

exports.Connection = mongoose.model('Connection', ConnectionSchema);
