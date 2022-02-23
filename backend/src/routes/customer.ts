import {Request, Response, Router} from "express";

import {CustomerModel} from "../models/customer";
import {OrderInterface, OrderModel,} from "../models/order";

const customerRouter = Router();

customerRouter.get('/profile', async function (req, res) {
    const custId = req.query.custId;
    if (!custId) {
        res.sendStatus(500);
        return;
    }
    try {
        const custRes = await CustomerModel.findById(custId).exec();
        res.send(custRes);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
})


customerRouter.post('/confirm', [], async (req: Request, res: Response) => {
    const custId = req.query.custId;
    if (!custId || !req.body) {
        res.sendStatus(500);
        return;
    }
    try {
        const customer = await CustomerModel.findById(custId).exec();
        if (!customer) {
            res.status(500).send("no customer found");
        }
        const orderData: OrderInterface = new OrderModel(req.body);
        const orderStore = new OrderModel(orderData);
        await orderStore.save();
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
    res.send("success");
})

customerRouter.post('/order', async function (req, res) {
    const custId = req.query.custId;
    if (!custId || !req.body) {
        res.sendStatus(500);
        return;
    }
    try {
        const customer = await CustomerModel.findById(custId).exec();
        const orderData: OrderInterface = new OrderModel(req.body);
        if (!customer) {
            res.status(500).send("no customer found");
        }
        orderData.tax = 0.1;
        orderData.deliveryFee = 5;
        orderData.serviceFee = 0.4;
        orderData.rating = 0.3;
        res.send(orderData);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default customerRouter
