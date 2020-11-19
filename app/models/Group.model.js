const mongoose = require('mongoose');

// * ─── GROUP SCHEMA AND MODEL ──────────────────────────────────────────────────────
const GroupSchema = new mongoose.Schema(
  {
    name: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    onlyAdminCanMsg: { type: Boolean, default: false },
    image: { type: String }
  },
  {
    timestamps: true
  }
);

exports.Group = mongoose.model('Group', GroupSchema);
