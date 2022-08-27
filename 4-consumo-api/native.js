const https = require('follow-redirects').https;
const fs = require('fs');

const options = {
    'method': 'GET',
    'hostname': 'https://rickandmortyapi.com',
    'path': '/api/character'
}

const req = https.request(options, function (res){
    var chunks = [];

    res.on("data", function (chunks){
        chunks.push(chunks)
    });

    res.on("end", function(chunks){
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });

    res.on("error", function(error){
        console.log(error)
    });
});

req.end()