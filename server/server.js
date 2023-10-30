const PORT = process.env.PORT || 3000;
const dbURL = 'mongodb+srv://nivh23:vSWzGSemJJIKZVjG@cluster0.2v6emhp.mongodb.net/?retryWrites=true&w=majority';

const app = require('./app');

const http = require('http');
const mongoose = require('mongoose');
const server = http.createServer(app);

mongoose.connection.once('open',()=>{
    console.log(`Database Connected!`);
});

mongoose.connection.on('error',()=>{
    console.log(`🔴Error Connecting to the Database Cluster`)
});

async function startServer(){
    await mongoose.connect(dbURL,{
        useNewUrlParser:true
    })
    server.listen(PORT,()=>{
        console.log(`Server is up! at port: ${PORT}\nhttp://localhost:${PORT}`);
    })
}

startServer();