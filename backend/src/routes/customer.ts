import {Router} from "express";
import mongoose from "mongoose";

const customerRouter = Router();
const Donut = mongoose.model('donut');
const Customer = mongoose.model('customer')

customerRouter.get('/menu', function(req, res, next){
        Donut.find({}, function(err,Donuts){
            res.send(Donuts)
        })
    }
    )

customerRouter.post('/confirm', function(req,res, next){
    Customer.findById(req.body.id)
})

customerRouter.post('/order', function(req, res, next){

})

export default customerRouter