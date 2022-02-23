import {Router} from "express";
import customerRouter from "./customer"
import donutRouter from "./donut";
import {employeeRouter} from "./employee"

const router = Router()
router.use('/customer', customerRouter)
router.use('/donut', donutRouter)
router.use('/employee', employeeRouter)

export default router;