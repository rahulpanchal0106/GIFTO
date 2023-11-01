const mongoose = require('mongoose');
const dbURL = process.env.MONGO_URL;

async function dbConnect(){
    try{
            const con = await mongoose.connect(dbURL,{
            useNewUrlParser:true
        })
        console.log(`\nMongoDB Cluster Connected: ${con.connection.host}\n`)
    }
    catch(err){
        console.log(`🔴🔴🔴error while connnecting to Database`)
    }
}


module.exports=dbConnect;