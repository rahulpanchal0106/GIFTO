const path = require('path');
function homePage(req,res){
    // res.set({
    //     'Content-Type': 'text/html',
    // });
    const home = path.join(__dirname,'..','..','client','pages','home.html');
    res.sendFile(home);
}

module.exports = {
    homePage
}