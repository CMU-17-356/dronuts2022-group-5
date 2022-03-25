import {Request, Response, Router} from "express";

import {CustomerInterface, CustomerModel} from "../models/customer";
import {OrderModel} from "../models/order";
import {Schema} from "mongoose";

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
    const orderId = req.query.orderId;
    if (!orderId) {
        res.status(400).send('Param orderId missing');
        return;
    }
    try {
        const order = await OrderModel.findById(orderId).exec();
        if (!order) {
            res.status(404).send("Order not found");
            return;
        }
        const orderStore = await OrderModel.findOneAndUpdate(
            {_id: orderId},
            {status: 'IN-PROGRESS'},
            {new: true},
        )
        OrderModel.deleteMany({status: 'UNCONFIRMED'});
        res.send(orderStore);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
})

customerRouter.get('/unconfirm', async function (req, res) {
    const custId = req.query.custId;
    if (!custId) {
        res.status(400).send('Param custId missing');
        return;
    }
    try {
        const orders = await OrderModel.
            find().
            where('customer').equals(custId).
            where('status').equals('UNCONFIRMED').
            exec();
        res.send(orders[orders.length - 1]);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

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
        const orderData = new OrderModel(req.body);
        if (!customer) {
            res.status(404).send("Customer not found");
            return;
        }
        orderData.customer = customer._id;
        orderData.status = 'UNCONFIRMED';
        orderData.tax = 0.1;
        orderData.serviceFee = 0.4;
        orderData.deliveryFee = 5;
        orderData.totalCost = 10;
        const orderStore = await orderData.save();
        res.send(orderStore);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

customerRouter.post('/order/update', async function (req, res) {
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
            return;
        }

        const filter = { customer: customer?._id , status: "UNCONFIRMED"};
        const orders = await OrderModel.find(filter).sort({createdAt: -1}).exec();
        let orderData = orders[0];
        if (orderData == null){
            orderData = new OrderModel();
            orderData.customer = customer._id;
            orderData.status = 'UNCONFIRMED';
            orderData.tax = 0.1;
            orderData.serviceFee = 0.4;
            orderData.donuts = new Array<Schema.Types.ObjectId>();
            orderData.donuts.push(req.body.donut);
            orderData.amounts.push(req.body.amounts);
            orderData.deliveryFee = 5;
            orderData.totalCost = 10;
            await orderData.save();
        }else{
            let idx = -1;
            for (let i = 0; i < orderData.donuts.length; i++){

                if (orderData.donuts[i] == req.body.donut){
                    idx = i;
                }
                if (orderData.amounts[i] == 0){
                    orderData.donuts.splice(i, 1);
                    orderData.amounts.splice(i, 1);
                    i--;
                }
            }
            if (idx != -1){
                if(req.body.amounts <= 0) {
                    orderData.donuts.splice(idx, 1);
                    orderData.amounts.splice(idx, 1);
                }
                else {
                    orderData.amounts[idx] = req.body.amounts;
                }
            }else{
                if(req.body.amounts == 0) {
                    res.send(orderData);
                    return;
                }
                else{
                    orderData.donuts.push(req.body.donut);
                    orderData.amounts.push(req.body.amounts);
                }
            }
            await OrderModel.updateOne({_id: orderData.id}, orderData)
        }
        res.send(orderData);
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});

export default customerRouter

