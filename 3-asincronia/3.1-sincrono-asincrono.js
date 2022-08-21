/*
Código sincrono: una línea se ejecuta inmediatamente después de la otra no hay codigo dependiente o bloqueante.
 */

// console.log('=========== Bloque 1 ==========');
// console.log('Primero');
// console.log('Segundo');
// console.log('Tercero');

/**
 * Bloque 2 Problema típico de asincronia
 */

const validatingPayment = () => {
    setTimeout(() =>{
        console.log('2 Validar la tarjeta de credito/debito y mostrar un loader');
    },1000)
}

console.log('1 Presionar el boton de comprar');
validatingPayment()
console.log('3 Ver el mensaje de "Gracias por su compra"');


