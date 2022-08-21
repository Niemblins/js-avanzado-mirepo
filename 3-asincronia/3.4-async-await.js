console.log('============ Bloque 5 ============');
/**
 * Bloque 5 - Async await (ES8 - 2017)
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
        }, 9000);
    });

};

async function main() {
    console.log('1 Presionar el boton de comprar');
    try {
        
        const response = await validatingPaymentPromise();
        console.log('3 Ver el mensaje de "Gracias por su compra"', response);
        console.log('4 Entregaremos en n fecha');
    }catch(error){
        console.log('error: ', error);
    }
    console.log('========= Final');
}
main();

