const mongoose = require('mongoose');

const homeSchema = mongoose.Schema({
    // userId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'user',
    //     required:true
    // },
    eventName:{
        type:String,
        required:false,
        unique:true
    },
    eventDate:{
        type:String,
        required:true
    },
    eventTime:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    details:{
        type:String,
        required:false
    }
},{timestamps:true});

module.exports = mongoose.model("home",homeSchema);