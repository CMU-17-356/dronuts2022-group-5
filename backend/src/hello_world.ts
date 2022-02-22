import { createServer, IncomingMessage, ServerResponse } from 'http';
require('./models')
require('./routes')
import express from "express"
const cors = require('cors')
const HOST_NAME = '127.0.0.1';
const PORT = 3000;


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(require('routes'))
const server = app.listen( process.env.PORT || PORT, function(){
});
