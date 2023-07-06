const express = require('express');

const router = express.Router();
const menu = require('../example-pizzas.json');

router.get('/menu', (req, res) => {
  res.send(menu);
});

module.exports = router;
