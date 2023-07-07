const express = require('express');
const Order = require('../Schema/Order');
const fetchUser = require('./fetchUser');

const router = express.Router();
router.get('/:id', fetchUser, (req, res) => {
  let result = 'null';
  Order.find({ id: req.params.id }).then((data) => {
    if (data.length !== 0) {
      result = data;
      res.send(result);
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
