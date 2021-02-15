const mongoose=require('mongoose');
const schema=mongoose.Schema;

let form= new schema({
    Name:{
        type:String
    },
    Phone:{
        type:String
    },
    Dept:{
        type:String
    },
    Year:{
        type:String
    },
    Q1:{
        type:String
    },
    Q2:{
        type:String
    },
    Q3:{
        type:String
    },
    Q4:{
        type:String
    },
    Q5:{
        type:String
    },
    Q6:{
        type:String
    },
})

module.exports = mongoose.model('Form', form);