const express = require('express'),
path= require('path'),
bodyParser= require('body-parser'),
cors = require('cors'),
mongoose = require('mongoose'),
config= require('./db');

const HorasRoute= require('./rutas/horas.route');

mongoose.Promise= global.Promise;
mongoose.connect(config.db,{userNewUrlParser:true}).then(
    ()=>{console.log('Database is connected')},
    err => {console.log('No se puede conectar con la base de datos'+err)}
);

const app= express();
app.use(bodyParser.json());
app.use(cors());
app.use('/horas', HorasRoute);
const port= process.env.PORT || 4000;

const server = app.listen(function(){
console.log('Listening on port' + port);
});