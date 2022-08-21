const http = require('http');

const server = http.createServer((request, response) =>{
    const status = 200;
    const mimetype = {'Content-Type' : 'text/html'}
    response.writeHead(status, mimetype);
    response.write('<html> <body> Hola desde el html desde nodejs</body></html>');
    response.end();
});

server.listen(2000);
console.log('el servidor fue iniciado');

/* Los mime types
indican la naturaleza y formtato de los archivos que son transmitidos de respuesta a una solicitud web, se debe reponder de que tipo recibo, pues de ese mismo se anotara que va la respuesta, es decir es el formato del archivo de lo que yo regreso
 */