const fetch = require('cross-fetch')

fetch('https://rickandmortyapi.com/api/character/?name=rick&status=alive') 
.then((response)=>{
    return response.json() //Aca devuelve un archivo .json, porque asi lo indicamos
}).then((resp)=>{
    console.log(resp)
})