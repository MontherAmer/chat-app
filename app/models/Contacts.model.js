const mongoose = require('mongoose');

// *
// * ─── CONTACT SCHEMA AND MODEL ──────────────────────────────────────────────────────
// *

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    // * Contact type D:Direct  or G:Group
    type: { type: String, enum: ['D', 'G'] },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
    blocked: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    image: {
      type: String,
      default: 'https://adsonwheelzstorage.s3.amazonaws.com/e6f98df2-7f40-4a88-a269-be65fe79f9ac.png'
    }
  },
  {
    timestamps: true
  }
);

exports.Contact = mongoose.model('Contact', ContactSchema);
