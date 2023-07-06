const express = require('express');
const data = require('../allOrders.json');

const router = express.Router();
// const id = '2';
router.get('/:id', (req, res) => {
  let result = 'null';
  data.map((e) => {
    if (e.id === Number.parseInt(req.params.id, 10)) {
      result = e;
      return e;
    }
    return 'null';
  });
  res.send(result);
});

module.exports = router;
