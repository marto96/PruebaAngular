const express = require('express');
const app= express();
const horasRoutes = express.Router();


let Horas = require('../modelos/horas');

horasRoutes.route('/add').post(function(req, res){
    let horas = new Horas(req.body);
    horas.save()
    .then(horas=>{
        res.status(200).json({'Horas':'Se ha guardado correctamente'});
    })
    .catch(err=>{
        res.status(400).send("no se guardo");
    })
})

module.exports = horasRoutes;
