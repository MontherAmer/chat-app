const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// *
// * ─── USER SCHEMA AND MODEL ──────────────────────────────────────────────────────
// *

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, index: { unique: true } },
    name: { type: String, minlength: 3, default: 'Guest' },
    language: { type: String, enum: ['E', 'A'], default: 'E' },
    status: { type: String },
    password: { type: String },
    show_online: { type: Boolean, default: true },
    online: { type: Boolean, default: true },
    contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }],
    provider: { type: String, default: 'local' },
    theme: { type: String, default: 'light' },
    image: {
      type: String,
      default: 'https://adsonwheelzstorage.s3.amazonaws.com/398ace6d-02f5-478e-9cd5-802d97d4dd81.jpeg'
    }
  },
  {
    timestamps: true
  }
);

// * pre save middleware to hash password before store it
UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    let salt = bcrypt.genSaltSync(5);
    let hashedPassword = bcrypt.hashSync(this.password, salt);
    this.password = hashedPassword;
  }
  next();
});

// * create compare password for user model
UserSchema.methods.comparePassword = async function (password) {
  let isEqual = await bcrypt.compareSync(password, this.password);
  return isEqual;
};

exports.User = mongoose.model('User', UserSchema);
