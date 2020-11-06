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
    password: { type: String, required: true },
    show_online: { type: Boolean, default: true },
    online: { type: Boolean, default: true },
    threads: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Thread' }],
    image: {
      type: String,
      default:
        'https://lh3.googleusercontent.com/proxy/U4g8a_fpFsJAVyzXtkVEoja8hvcUrcZSb1cpnx8O7giNcvtI6pTz4I3ckSlJEmj7ZkoNIVQq8LXuxa-LhIaOdIMEjxqIkPd_Cr9wRnBSITg3cteC8GUcH1Q'
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
