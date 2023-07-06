const express = require('express');
const fs = require('fs');
const allOrder = require('../allOrders.json');
const menu = require('../example-pizzas.json');

const router = express.Router();
const allOrderIds = [];
const prices = [];

router.get('/', (req, res) => {
  const pendingOrders = [];
  pendingOrders.push(allOrder.map((e) => {
    if (e.status === 'pending') {
      allOrderIds.push(e.id);
      return e;
    }
    return '';
  }));

  res.send(pendingOrders);
});

router.post('/', (req, res) => {
  allOrder.forEach((e) => {
    if (e.status === 'pending') {
      allOrderIds.push(e.id);
    }
  });
  let ID = Math.floor(Math.random() * 80000000);
  while (allOrderIds.includes(ID)) {
    ID = Math.floor(Math.random() * 80000000);
  }
  req.body.id = ID;
  menu.forEach((item) => {
    if (req.body.orderedItems.includes(item.name)) {
      prices.push(item.price);
    }
  });
  req.body.price = prices;
  allOrder.push(req.body);
  fs.writeFileSync('allOrders.json', JSON.stringify(allOrder));
  res.send(`Order is Confirmed! Your Order id is ${ID}`);
});

module.exports = router;
