import express from 'express';
import mongoose from 'mongoose';

import config from '../config.json';
import { donutRouter } from './routes/donut';
import { employeeRouter } from './routes/employee';

const app = express();

app.use(employeeRouter);
app.use(donutRouter)

mongoose.connect(config.db, () => {
    console.log('connected to database');
});

app.listen(config.port, () => {
    console.log(`server is listening on port ${config.port}`)
});
