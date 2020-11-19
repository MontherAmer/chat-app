const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ['D', 'G'], required: true },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    // for groups
    name: { type: String },
    image: { type: String },
    onlyAdminCanMsg: { type: Boolean },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }]
  },
  {
    timestamps: true
  }
);

exports.Contact = mongoose.model('Contact', ContactSchema);
