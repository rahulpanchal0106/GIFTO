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
    signup_as:{
        type:String,
        required:true
    },
    address:{
        type:String,
        unique:false
    },
    company:{
        type:String,
        unique:false
    }
})



const userdb = mongoose.model('userdb',schema);

module.exports=userdb;