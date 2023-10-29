const path = require('path');

function preLoginPage(req,res){
    const page = path.join(__dirname,'..','..','client','pages','preLogin.html');
    res.sendFile(page);
}

module.exports = {
    preLoginPage
}