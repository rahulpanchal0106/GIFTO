const path = require('path');
const homeModel = require('../models/home');



async function createEvent(req,res){
    const {eventName,eventDate,eventTime,address,details}=req.body;
    try{
        const existingEvent = await homeModel.findOne({eventName:eventName});
        if(existingEvent){
            return res.status(400).json({msg:'Event already Exists'});
        }

        const result = await homeModel.create({
            eventName:eventName,
            eventDate:eventDate,
            eventTime:eventTime,
            address:address,
            details:details
        });

        res.status(201).json({event:result,msg:`${eventName} Event Created`});
    }catch(err){
        console.log(err);
        res.status(500).json({msg:"Error creating event"})
    }
}



function homePage(req,res){
    // res.set({
    //     'Content-Type': 'text/html',
    // });
    const home = path.join(__dirname,'..','..','client','pages','home.html');
    res.sendFile(home);
}

module.exports = {
    homePage,
    createEvent
}