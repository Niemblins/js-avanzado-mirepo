const fs = require('fs');
//fs maneja archivos

//para cambiar los permisos de un archivo
fs.chmod(path, mode, callback);

//para cambiar el usuario dueño de un archivo
fs.chown(path, uid, gid, callback);

//para escribir y crear un archivo
fs.writeFile(file, data,[ options], callback);

//abrir un archivo
fs.open(path,[ flags, [mode]], callback);

//abrir un directorio
fs.opendir(path,[options], callback);

//leer un archivo
fs.readFile(path,[options]);

//ejecuta un callback en una path
fs.realpath(path,[options], callback);

//renombrar un archivo
fs.rename(oldPath, newPath, callback);

//elimina un directorio
fs.rmdir(path,[options], callback);

//elimina un archivo
fs.rm(path,[options], callback);