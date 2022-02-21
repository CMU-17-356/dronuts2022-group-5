import express from 'express';
import mongoose from 'mongoose';
import { CustomerModel } from './models/customer';
import { DonutModel } from './models/donut';
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
  const donut = new DonutModel({name: 'testdonut'});
  donut.save(err => {
    if (err) res.sendStatus(500);
  })
  const customer = new CustomerModel({username: 'testcustomer', password: 'testpassword'});
  customer.save(err => {
    if (err) res.sendStatus(500);
  });
  const order = new OrderModel({customer: customer, donuts: [donut], tax: 1});
  order.save(err => {
    if (err) res.sendStatus(500);
  });
  res.send('success');
})

app.get('/employee/orders', (req, res) => {
  const orderId = req.query.orderId;

  if (!orderId) {
    // Return details of all orders that are not yet completed
    OrderModel.find().where('status').ne('COMPLETED').exec((err, orders) => {
      if (err) res.sendStatus(404);
      res.send(orders);
    });
  } else {
    // Specific order
    OrderModel.findOne().where('_id').equals(orderId).exec((err, order) => {
      if (err) res.sendStatus(404);
      res.send(order);
    })
  }
});

app.post('/employee/confirm', (req, res) => {
  res.send('TODO');
});

app.listen(port, hostname, () => {
  console.log(`server started at ${hostname}:${port}`)
});
