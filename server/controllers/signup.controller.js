const path = require('path');

function signupPage(req,res){
    const page = path.join(__dirname,'..','..','client','pages','signup.html');
    res.sendFile(page);
}

module.exports={
    signupPage
}