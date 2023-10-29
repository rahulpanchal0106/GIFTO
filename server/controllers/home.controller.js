const path = require('path');

function homePage(req,res){
    const home = path.join(__dirname,'..','..','client','pages','home.html');
    res.sendFile(home);
}

module.exports = {
    homePage
}