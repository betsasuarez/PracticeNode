const servidor = require('http');

const server = servidor.createServer((req, res)=>{
    if(req.method === 'POST'){
        let body = '';
        req.on('data', (chunk)=>{
            body += chunk;
        });

        req.on('end', ()=>{
            console.log(body);
            let username = body.split('&')[0].split('=')[1];
            let password = body.split('&')[1].split('=')[1];

            res.setHeader('Content-Type', 'text/html');
            res.end('Usuario: '+ username + ' Contraseña: ' + password);
        })
    }
    else{
        res.setHeader('Content-Type', 'text/html');
        res.end('<form method="POST"><input type="text" name="username" placeholder="Username"></input><br><input type="password" name="password" placeholder="Password"></input><br><button type="submit">Create User</button></form>');
    }
});

server.listen(5001, () => {
    console.log('Server running at http://localhost:5001/');
});
