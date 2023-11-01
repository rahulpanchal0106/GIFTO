const mongoose = require('mongoose');
const schema = mongoose.Schema({
    fullName:{
        required:true,
        type:String
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
        unique:true
    }
})



const userdb = mongoose.model('userdb',schema);

module.exports=userdb;