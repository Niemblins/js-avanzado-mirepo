const http = require('http');

const server = http.createServer((request, response) =>{
    const status = 200;
    const mimetype = {'Content-Type' : 'text/html'}
    response.writeHead(status, mimetype);
    response.write('<html> <body> Hola desde el html de nodejs</body></html>');
    response.end();
});

server.listen(2000);
console.log('el servidor fue iniciado');
