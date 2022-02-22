import {Request, Response, Router} from "express";
import mongoose from "mongoose";
import {CustomerModel} from "../models/customer";
import {OrderInterface, OrderModel,} from "../models/order";

const customerRouter = Router();
const Donut = mongoose.model('donut');
const Customer = mongoose.model('customer')
const Order = mongoose.model('order')

customerRouter.get('/profile', function (req, res) {
        const custId = req.query.custId;
        try {
            if (!custId) {
                res.sendStatus(500)
            }
            CustomerModel.findById(custId)
            res.send(Customer);
        } catch (err) {
            console.log(err);
            res.status(500).send(err);
        }
    }
)


customerRouter.post('/confirm', [], async (req: Request, res: Response) => {
    try {
        const customer = Customer.findById(req.query.custId);
        if (customer == null) {
            res.status(500).send("no customer found");;
        }
        const orderData: OrderInterface = JSON.parse(req.body);
        const orderStore = new OrderModel(orderData);
        await orderStore.save()
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
    res.send("success")
})

customerRouter.post('/order', function (req, res, next) {
    try {
        const customer = Customer.findById(req.query.custId);
        const orderData: OrderInterface = JSON.parse(req.body);
        if (customer == null) {
            res.status(500).send("no customer found");
        }
        orderData.tax = 0.1;
        orderData.deliveryFee = 5;
        orderData.serviceFee = 0.4;
        orderData.rating = 0.3
        res.send(orderData)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }


})

export default customerRouter