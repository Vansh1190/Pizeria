const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/pizza', require('./routes/pizza'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/order', require('./routes/orderDetails'));

app.listen(port, () => {
//   const data = fs.readFileSync('allOrder.json');
//   const jsonData = JSON.parse(data);
//   jsonData.push({
//     name: "James Den",
//     email: "james.den@example.com"
// });

  // console.log(jsonData);
  // fs.writeFileSync('allOrder.json', JSON.stringify(jsonData));
  // console.log(`Server is running on on port http://localhost:${port}`);
});
