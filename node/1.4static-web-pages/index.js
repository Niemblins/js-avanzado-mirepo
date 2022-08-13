const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((request, response) => {
    const urlObject = url.parse(request.url);
    const path = urlObject.path;
    let fileSystemPath = '';

    if(path === '/'){
        fileSystemPath = 'static/index.html';
    }else{
        fileSystemPath = `stacic${path}`;
    } 

    fs.stat(fileSystemPath, error => {
        if(!error){
            fs.readFile(fileSystemPath, (error,file)=>{
                if(!error){
                    const status = 200;
                    const mimeType = {'Content-Type' : 'text/html'};
                    reponse.writeHead(status, mimeType);
                    reponse.write(file);
                    response.end();
                }else{ 
                //500  internal server error
                const status = 500;
                    const mimeType = {'Content-Type' : 'text/plain'};
                    reponse.writeHead(status, mimeType);
                    reponse.write('Error en el servidor');
                    response.end();
                }
            });
        }else{
            //404 not found
            const status = 404;
                    const mimeType = {'Content-Type' : 'text/html'};
                    reponse.writeHead(status, mimeType);
                    reponse.write('<html> <body> Not Found </body></html>');
                    response.end();

        }
    });
});

server.listen(2000);
console.log('servidor de paginas');