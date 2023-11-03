const path = require('path');
const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {homePage} = require('./home.controller');
const SECRET_KEY = process.env.SECRET_KEY;

const loginVer = async (req,res)=>{
    const {email,password} = req.body;

    try{
        const existingUser = await userModel.findOne({email:email});
        if(!existingUser){
            return res.status(404).json({msg:"User Not Found"});
        }
        const matchPassword = await bcrypt.compare(password,existingUser.password);
        if(!matchPassword){
            return res.status(400).json({msg:"Invalid Credentials"});
        }

        const token = jwt.sign({email:existingUser.email,id:existingUser._id},SECRET_KEY)
        res.status(200).json({user:existingUser,token:token});


    }catch(err){
        console.log("Something went wrong\n")
        res.status(500).json({msg:"Error while logging in",error:err});
    }
}
function loginPage(req,res){
    const page = path.join(__dirname,'..','..','client','pages','login.html');
    res.sendFile(page)
}

module.exports = {
    loginVer,
    loginPage
};