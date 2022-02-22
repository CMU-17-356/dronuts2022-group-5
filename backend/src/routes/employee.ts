import express, { Request, Response } from 'express';

import { CustomerModel } from '../models/customer';
import { DonutModel } from '../models/donut';
import { OrderModel } from '../models/order';

const router = express.Router();

router.get('/employee/test', [], async (req: Request, res: Response) => {
    // Temporary way of adding orders
    try {
        const donut = await DonutModel.findOne();
        const customer = new CustomerModel({username: 'testcustomer', password: 'testpassword'});
        await customer.save();
        const order = new OrderModel({customer: customer, donuts: [donut], tax: 1});
        await order.save();
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
        return;
    }

    res.send('success');
});

router.get('/employee/orders', [], async (req: Request, res: Response) => {
    const orderId = req.query.orderId;

    try {
        if (!orderId) {
            // Return details of all orders that are not yet completed
            const orders = await OrderModel.find().where('status').ne('COMPLETED').exec();
            res.send(orders);
        } else {
            // Specific order
            const order = await OrderModel.findOne().where('_id').equals(orderId).exec();
            if (!order) res.sendStatus(404);
            else res.send(order);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/employee/confirm', (req: Request, res: Response) => {
    res.send('TODO');
});

export { router as employeeRouter }
