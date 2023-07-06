const mongoose = require('mongoose');

const Menu = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ingredients: [{
    type: String,
    required: true,
  }],
});
module.exports = mongoose.model('PizeriaMenu', Menu);
