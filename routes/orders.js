const express = require('express');
const Order = require('../Schema/Order');
const Menu = require('../Schema/Menu');
const fetchUser = require('./fetchUser');

const router = express.Router();

router.get('/', fetchUser, (req, res) => {
  Order.find({ status: 'pending' }).then((pendingOrders) => {
    if (pendingOrders.length !== 0) {
      res.send(pendingOrders);
    } else {
      res.send('No pending Orders.');
    }
  });
});

router.post('/', fetchUser, (req, res) => {
  const prices = [];
  Menu.find({}).then(async () => {
    const menu = req.body.orderedItems;
    const ID = Math.floor(Math.random() * 80000000);
    req.body.id = ID;
    const promises = menu.map(
      (item) => Menu.find({ name: item }).then((p) => prices.push(p[0].price)),
    );

    await Promise.all(promises);
    req.body.price = prices;
    const AllOrders = new Order(req.body);
    AllOrders.save().then(() => {
      if (prices.length === 0) {
        res.status(400).send('Please choose valid Item');
      } else {
        res.status(200).send(`Order is Confirmed! Your Order id is ${ID} You can track your order here http://localhost:3000/api/order/${ID}`);
      }
    }).catch((err) => {
      res.send(`We are getting many orders, please try again. ${err.message}`, 400);
    });
  });
});

module.exports = router;
