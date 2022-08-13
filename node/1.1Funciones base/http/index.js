const http = require('http');
const net = require('net');
const { url } = require('url');
/*http nos ayuda para manejar cosas del lado del servidor, o cosas de una api, podemos levantar a un servidor web que atienda a los usuarios y ese puede estar regresando info del sistema operativo, o archivos de la compu, o páginas que creemos en el momento
*/

//crear un servidor
const server = http.createServer(callback);
//levantar un servidor
server.listen()

//metodos del objeto request (solicitud)
request.path
request.method
request.host
request.protocol

//metodos del objeto response (respuesta)
response.getHeaders()
response.req
response.statusCode
response.statusMessage
response.write(chunk,[encoding],[callback])
response.end();