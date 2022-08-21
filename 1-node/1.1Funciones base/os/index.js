const os = require('os');

console.log('version del sistema: ', os.version());

console.log('Nombre de la versión del sistema: ', os.platform());
console.log('Numero de la versión del sistema:' + os.release());

console.log('Arquitectura: ', os.arch()); //muestra info de la arquit de ntro. sistema, se refiere al no bytes con los que funciona
console.log('Número de procesadores lógicos:' + os.cpus().length);
console.log('Información acerca de los cpus: ', os.cpus());
console.log('Memoria libre en bytes', os.freemem()); //se refiere a la memoria ram
console.log('Carpeta del usuario actual: ', os.homedir()); //nos regeresa el nombre que le pusimos a la compu
console.log('Mi direccion ip o mi hostname (local): ', os.hostname());// nos regresa una dirección ip, local, de nuestra compu