import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import config from '../config.json';
import router from "./routes";
import cors from 'cors';

const app = express();
const jsonParser = bodyParser.json();
// const urlencoded = bodyParser.urlencoded({extended: false});
app.use(jsonParser);

app.use(router);
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }));
app.use(cors);
app.use(express.static(__dirname + '/public'));

mongoose.connect(config.db, () => {
    console.log('connected to database');
});

app.listen(config.port, () => {
    console.log(`server is listening on port ${config.port}`)
});
