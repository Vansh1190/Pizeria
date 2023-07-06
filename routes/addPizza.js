const express = require('express');

const router = express.Router();
const Menu = require('../Schema/Menu');

router.post('/menu/add', (req, res) => {
  const item = new Menu(req.body);
  item.save().then(() => {
    res.send(`Added new Item Successfully ${req.body.name}, ${req.body.price}`);
  }).catch((err) => {
    res.status(400).send(err.message);
  });
});

router.get('/menu', (req, res) => {
  Menu.find({}).then((menu) => {
    res.send(menu);
  });
});

module.exports = router;
