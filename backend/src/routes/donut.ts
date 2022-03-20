import express, { Request, Response } from 'express';
import { DonutModel } from '../models/donut';

const donutRouter = express.Router();

donutRouter.get('/donuts', [], async (req: Request, res: Response) => {
    const donutId = req.query.donutId;
    try {
        if (!donutId) {
            // Return details of all donuts
            const orders = await DonutModel.find().where('status').ne('COMPLETED').exec();
            res.send(orders);
        } else {
            // Specific donut
            const order = await DonutModel.findOne().where('_id').equals(donutId).exec();
            if (!order) res.status(404).send("Donut not found");
            else res.send(order);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

donutRouter.post('/update', [], async (req: Request, res: Response) => {
    const donutId = req.query.donutId;
    if (!donutId) {
        res.status(400).send('Param donutId missing');
        return;
    }
    if (!req.body) {
        res.status(400).send('Body missing');
        return;
    }
    try {
        const donut = await DonutModel.updateOne({_id: donutId}, req.body);
        res.send(donut);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default donutRouter
