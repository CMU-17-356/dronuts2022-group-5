import { createServer, IncomingMessage, ServerResponse } from 'http';
import router  from './routes'
import mongoose from "mongoose";
require('./models')
require('./routes')

import express from "express"
const cors = require('cors')
const HOST_NAME = '127.0.0.1';
const PORT = 3000;

mongoose.connect('mongodb://127.0.0.01/db');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(router)