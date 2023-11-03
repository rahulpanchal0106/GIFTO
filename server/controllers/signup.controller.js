const path = require('path');
const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const SECRET_KEY = process.env.SECRET_KEY;
function signupPage(req,res){
    const page = path.join(__dirname,'..','..','client','pages','signup.html');
    res.sendFile(page);
}

const signup = async (req,res)=>{
    const {fullName,password,email,address,mobile,signup_as,company}=req.body;
    console.log(req.body);
    try{
        const existingUser = await userModel.findOne({email:email});
        if(existingUser){
            return res.status(400).json({msg:'User already Exists'});
        }
        
        const hashedPassword = await bcrypt.hash(password,10);
        const result = await userModel.create({
            fullName:fullName,
            email:email,
            address:address,
            mobile:mobile,
            signup_as:signup_as,
            password:hashedPassword,
            company:company
        });

        var token = jwt.sign({email:result.email,id:result._id},SECRET_KEY);
        console.log(token);
        res.status(201).json({user:result,token:token});
    }catch(err){
        console.log(`🔴Errror *0*\n${err}`);
        return res.status(500).json({msg:'Something went wrong'});
    }
}

function signupAsResident(req,res){
    const page = path.join(__dirname,'..','..','client','pages','resident_signup.html');
    res.sendFile(page);
}

function signupAsWorker(req,res){
    const page = path.join(__dirname,'..','..','client','pages','professional_signup.html');
    res.sendFile(page);
}
module.exports={
    signupPage,
    signupAsResident,
    signupAsWorker,
    signup
}