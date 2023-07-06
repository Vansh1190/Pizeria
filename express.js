const mongoose = require('mongoose');
require('dotenv').config();

function ConnectToMongo() {
  mongoose.connect(process.env.Mongo_URI).then(() => {
    console.log('Connected to DB successfully');
  }).catch((err) => {
    console.log(err);
  });
}

module.exports = ConnectToMongo;
