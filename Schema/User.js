const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('PizeriaAuth', UserSchema);
