import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import config from '../config.json';
import router from "./routes";
import cors from 'cors';

const app = express();
app.use(cors());
const jsonParser = bodyParser.json();
// const urlencoded = bodyParser.urlencoded({extended: false});
app.use(jsonParser);


// app.use(express.json())
// app.use(express.urlencoded({ extended: false }));
const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
app.use(router);
app.use(express.static(__dirname + '/public'));

mongoose.connect(config.db, () => {
    console.log('connected to database');
});

app.listen(config.port, () => {
    console.log(`server is listening on port ${config.port}`)
});
