import {Router} from "express";
import customerRouter from "./customer"
import donutRouter from "./donut";

const router = Router()
router.use('/customer', customerRouter)
router.use('/donut', donutRouter)

export default router;