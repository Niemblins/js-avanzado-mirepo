console.log('============ Bloque 4 ============');
/**
 * Bloque 4 - Promises (pending, reject, resolve)
 */


const validatingPaymentPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('2 Validar la tarjeta de credito/debito y mostrar un loader');
            const statusArray = [200, 500];
            const randomStatus = statusArray[Math.floor(Math.random() * statusArray.length)];
            if (randomStatus === 200) {
                resolve('todo genial');
            } else if (randomStatus === 500) {
                reject('tu tarjeta fue declinada :c');
            }
        }, 0);
    });

};

console.log('1 Presionar el boton de comprar');
validatingPaymentPromise()
    .then(response => {
        console.log('3 Ver el mensaje de "Gracias por su compra"', response);
        //more sentences Code
    }).then(() => console.log('4 Entregaremos en n fecha'))
    .catch(error => console.log('error: ', error))
    .finally(() => console.log('========= Final'))
    


/*para generar ese nuevo objeto de tipo promesa, como es un constructor(o sea un tipo de funcion)*/