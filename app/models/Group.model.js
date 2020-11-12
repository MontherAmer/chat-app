const mongoose = require('mongoose');

// * ─── GROUP SCHEMA AND MODEL ──────────────────────────────────────────────────────
const GroupSchema = new mongoose.Schema(
  {
    name: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    onlyAdminCanMsg: { type: Boolean, default: false },
    contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thread' }],
    image: { type: String }
  },
  {
    timestamps: true
  }
);

exports.Group = mongoose.model('Group', GroupSchema);
