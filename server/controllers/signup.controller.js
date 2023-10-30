const path = require('path');

function signupPage(req,res){
    const page = path.join(__dirname,'..','..','client','pages','signup.html');
    res.sendFile(page);
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
    signupAsWorker
}