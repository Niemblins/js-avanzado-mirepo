function sum(a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}
//esto es un objeto cuando se quieren exportar muchas cosas
module.exports = {
    sum,
    substract,
};