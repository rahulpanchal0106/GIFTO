require('dotenv').config();
const PORT = process.env.PORT;
const app = require('./app');
const dbConnect = require('./database/connection')
const http = require('http');

const server = http.createServer(app);


async function startServer(){
    await dbConnect();
    server.listen(PORT,()=>{
        console.log(`Server is up! at port: ${PORT}\nhttp://localhost:${PORT}\n`);
    })
}

startServer();