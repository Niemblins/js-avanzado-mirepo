const fs = require('fs');

const path = './'; //para subir de niveles entre carpetas se pone ../../ y asi las veces que sea necesario ir subiendo o saliendo entre carpetas, y para ahi mismo, o aquí, se usa ./
const nameFile = 'my-file.txt';
const contentForFile = 'Esto esta escrito desde node en la raiz del proyecto ';

/*
/Users/aurora/Desktop/Cursodevf/JavascriptAvanzado/repo-clases/js-avanzado-mirepo/node/1.2crear-archivos 
(path absoluta: se refiere a una ruta completa en todo el disco duro en donde se encuentra algo)*/
/* 
node/1.2crear-archivos 
(relative path: esta se refiere a cuando estamos trabajando en otra compu y no es tan necesesario escribir toda la path, se recomienda esta cortita)*/

//const filePath = path + '/' + nameFile;
const filePath = `${path}/${nameFile}`;
fs.writeFile(filePath, contentForFile, (err) => {
    if(err){
        throw err;
    }else {
        console.log('archivo creado con exito...!!');
    }
});
