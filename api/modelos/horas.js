const mongoose=require('mongoose');
const Schema = mongoose.Schema;

let Horas=new Schema({
    documento:{
        type:String
    },
    nombres:{
        type:String
    },
    fechaInicio:{
        type:Date
    },
    fechaFin:{
        type:Date
    },
    horarioIniTur:{
        type:Time
    },
    horarioFinTur:{
        type:Time
    },
    horarioIniHor:{
        type:Time
    },
    horarioFinHor:{
        type:Time
    },
    motivo:{
        type:String
    }
    },{
        collection:'horas'
});

module.exports = mongoose.model('Horas',Horas);