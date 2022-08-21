/*
Bloque 3 solucion 1 uso de callbacks
Un callback es una funcion que se pasa como parametro a otra, con el fin de ejecutar en el momento que la necesitemos.
Nota: no es una buena practica por el anidamiento que produce (callback hell)
*/
const showSuccessMessage = () => {
    console.log('3 Ver el mensaje de "Gracias por su compra"');
}
const validatingPayment = (showSuccessMessage) => {
    setTimeout(() =>{
        console.log('2 Validar la tarjeta de credito/debito y mostrar un loader');
        showSuccessMessage()
    },0);
}

console.log('1 Presionar el boton de comprar');
validatingPayment(showSuccessMessage);
