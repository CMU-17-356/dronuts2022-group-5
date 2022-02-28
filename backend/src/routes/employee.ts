import express, { Request, Response } from 'express';

import { OrderModel } from '../models/order';

const router = express.Router();

router.get('/orders', [], async (req: Request, res: Response) => {
    const orderId = req.query.orderId;
    try {
        if (!orderId) {
            // Return details of all in progress orders
            const orders = await OrderModel.find().where('status').equals('IN-PROGRESS').exec();
            res.send(orders);
        } else {
            // Specific order
            const order = await OrderModel.findById(orderId).exec();
            if (!order) res.sendStatus(404).send('Order not found');
            else res.send(order);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

router.post('/confirm', async (req: Request, res: Response) => {
    const orderId = req.query.orderId;
    if (!orderId) {
        res.status(400).send('Param orderId missing');
        return;
    }

    try {
        // TODO: Drone API call here
        // Change existing order to IN-DELIVERY
        const order = await OrderModel.findOneAndUpdate(
            {_id: orderId},
            {status: 'IN-DELIVERY'},
            {new: true},
        );
        res.send(order);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export { router as employeeRouter }
