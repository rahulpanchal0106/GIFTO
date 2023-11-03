const mongoose = require('mongoose');

const homeSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    event:{
        type:String,
        required:false
    }
},{timestamps:true});

module.exports = mongoose.model("home",homeSchema);