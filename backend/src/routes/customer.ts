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

export default customerRouter