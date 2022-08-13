const path = require('path');
/*significa dirección o ruta, puede ser de archivos de nuestro local, o en una url, donde hemos accedido dentro de un menu y nos dice la ubicación donde estamos, como una secuencia de carpetas*/

//métodos de tratamiento de una path
path.basename(path,[ext])
path.dirname(path)
path.format(pathObject)
path.join([...paths])
path.parse(path)