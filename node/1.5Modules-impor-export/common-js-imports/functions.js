

function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//exports.sum = sum;
// this.exports.sum = sum;
// exports.substract = substract;
// exports.multiply = multiply;
// exports.divide = divide;

module.exports = { //esto es un objeto cuando se quieren exportar muchas cosas
    sum:sum, //como en este caso solo se podria dejar sum, por tener el mismo nombre
    substract, // cuando la clave y valor tienen el mismo nombre, solo se pone uno, como el anterior
    multiply,
    divideNumbers: divide,//cuando el nombre de clave es diferente al del valor
};