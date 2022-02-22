import express, { Request, Response } from 'express';

import { DonutModel } from '../models/donut';

const router = express.Router();

router.get('/donuts', [], async (req: Request, res: Response) => {
    const donutId = req.query.donutId;

    try {
        if (!donutId) {
            // Return details of all donuts
            const orders = await DonutModel.find().where('status').ne('COMPLETED').exec();
            res.send(orders);
        } else {
            // Specific donut
            const order = await DonutModel.findOne().where('_id').equals(donutId).exec();
            if (!order) res.sendStatus(404);
            else res.send(order);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export { router as donutRouter }
