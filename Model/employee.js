const mongoose = require('mongoose');

const schema = mongoose.Schema({
    ename:{
        type:String,
        required:true,
        minlength:3
    },
    eage:{
        type:Number,
        required:true,
        minlength:2
    },
    epost:{
        type:String,
        required:true,
        minlength:3
    },
    esalary:{
        type:Number,
        required:true,
        minlength:5
    }
    // name:String,
    // qty:Number
},{timestamps:true});

module.exports = mongoose.model("Employee",schema);