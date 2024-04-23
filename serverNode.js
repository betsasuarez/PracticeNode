/*Usando HTTP*/
const http = require('http');

const server = http.createServer((req, res)=>{
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({
        data: ' Trafalgar Law \n hello',
    }));
});

server.listen(5000);