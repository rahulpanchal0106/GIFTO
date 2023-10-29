const path = require('path');

function loginVer(req,res){
    res.send('login page verification');
}
function loginPage(req,res){
    const page = path.join(__dirname,'..','..','client','pages','login.html');
    res.sendFile(page)
}

module.exports = {
    loginVer,
    loginPage
};