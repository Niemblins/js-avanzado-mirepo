const request = require('request');

const options = {
    'method': 'get',
    'url': 'https://rickandmortyapi.com/api/character/1',
    'headers': {}
}

request(options, function (error, response){
    if (error) throw new Error(error);
    console.log(response.body)
})