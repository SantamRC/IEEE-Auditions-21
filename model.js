const mongoose=require('mongoose');
require('mongoose-type-email');
const schema=mongoose.Schema;


let form= new schema({
    Name:{
        type:String
    },
    Email:{
        type:mongoose.SchemaTypes.Email,
        unique:true,
        required:true
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