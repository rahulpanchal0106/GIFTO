const PORT = process.env.PORT || 3000;

const app = require('./app');

const http = require('http');
const server = http.createServer(app);


function startServer(){
    server.listen(PORT,()=>{
        console.log(`Server is up! at port: ${PORT}\nhttp://localhost:${PORT}`);
    })
}

startServer();