import {Request, Response, Router} from "express";

import {CustomerInterface, CustomerModel} from "../models/customer";
import {OrderInterface, OrderModel,} from "../models/order";

const customerRouter = Router();

customerRouter.post('/create', [], async function (req: Request, res: Response) {
    if (!req.body) {
        res.status(400).send('Body missing');
        return;
    }
    try {
        const customerData: CustomerInterface = new CustomerModel(req.body);
        const customerStore = new CustomerModel(customerData);
        const custRes = await customerStore.save();
        res.send(custRes);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

customerRouter.get('/profile', async function (req, res) {
    const custId = req.query.custId;
    if (!custId) {
        res.status(400).send('Param custId missing');
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
    if (!custId) {
        res.status(400).send('Param custId missing');
        return;
    }
    if (!req.body) {
        res.status(400).send('Body missing');
        return;
    }
    try {
        const customer = await CustomerModel.findById(custId).exec();
        if (!customer) {
            res.status(404).send("Customer not found");
        }
        const orderData: OrderInterface = new OrderModel(req.body);
        const orderStore = new OrderModel(orderData);
        await orderStore.save();
        res.send(orderStore);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
})

customerRouter.post('/order', async function (req, res) {
    const custId = req.query.custId;
    if (!custId) {
        res.status(400).send('Param custId missing');
        return;
    }
    if (!req.body) {
        res.status(400).send('Body missing');
        return;
    }
    try {
        const customer = await CustomerModel.findById(custId).exec();
        const orderData: OrderInterface = new OrderModel(req.body);
        if (!customer) {
            res.status(404).send("Customer not found");
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
