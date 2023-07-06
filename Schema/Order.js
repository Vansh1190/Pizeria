const mongoose = require('mongoose');

const { Schema } = mongoose;

const OrderSchema = new Schema({
  name: {
    type: String,
    required: true,

  },
  orderedItems: [{
    type: String,
    required: true,
  }],
  status: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  price: {
    type: Array,
    required: true,
  },

});
module.exports = mongoose.model('Pizeria', OrderSchema);
