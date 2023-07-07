const express = require('express');
const cors = require('cors');
const ConnectToMongo = require('./express');

const app = express();
const port = 3000;

ConnectToMongo();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/pizza', require('./routes/addPizza'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/order', require('./routes/orderDetails'));
app.use('/api/auth', require('./routes/Auth'));

app.listen(port, () => {
  // console.log(jsonData);
  // fs.writeFileSync('allOrder.json', JSON.stringify(jsonData));
  console.log(`Server is running on on port http://localhost:${port}`);
});
