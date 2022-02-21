import express from 'express';
import mongoose from 'mongoose';
import { CustomerModel } from './models/customer';
import { OrderModel } from './models/order';

const app = express();
const hostname = '127.0.0.1';
const port = 3000;

mongoose.connect('mongodb://127.0.0.01/db');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Temporary way of adding orders
app.get('/test', (req, res) => {
  const customer = new CustomerModel({username: 'testcustomer', password: 'testpassword'});
  customer.save(err => {
    if (err) res.send('error');
  });
  const order = new OrderModel({customer: customer, tax: 1});
  order.save(err => {
    if (err) res.send('error');
  });
  res.send('success');
})

app.get('/employee/orders', (req, res) => {
  // Return details of all orders that are not yet completed
  OrderModel.find().where('status').ne('COMPLETED').exec((err, orders) => {
    if (err) res.send('error');
    else {
      res.send(orders.map(x => x.toJSON()));
    }
  });
});

app.post('/employee/confirm', (req, res) => {
  res.send('TODO');
});

app.listen(port, hostname, () => {
  console.log(`server started at ${hostname}:${port}`)
});
