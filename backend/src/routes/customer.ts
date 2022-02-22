import {Router} from "express";
import mongoose from "mongoose";
import {CustomerModel} from "../models/customer";

const customerRouter = Router();
const Donut = mongoose.model('donut');
const Customer = mongoose.model('customer')
const Order

customerRouter.get('/profile', function(req, res, next){
        CustomerModel.find({_id: 1}, function(err,customer){
            if (err){
                res.sendStatus(500);
            }
            res.send(Customer);
        })
    }
    )

customerRouter.post('/confirm', function(req,res, next){
    const customer = Customer.findById(req.body.id)




})

customerRouter.post('/order', function(req, res, next){
    Customer.findById(req.body.id)
    //TODO

})

export default customerRouter