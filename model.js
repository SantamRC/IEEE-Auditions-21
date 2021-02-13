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
})

module.exports = mongoose.model('Form', form);