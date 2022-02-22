import express from 'express';
import mongoose from 'mongoose';

import config from '../config.json';
import router from "./routes";


const app = express();
app.use(router);
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

mongoose.connect(config.db, () => {
    console.log('connected to database');
});

app.listen(config.port, () => {
    console.log(`server is listening on port ${config.port}`)
});
