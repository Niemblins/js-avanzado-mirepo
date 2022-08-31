import mysql from "promise-mysql";
import config from "./Constants"; //importamos nuestras constantes, el config de nuestros constants.js

//conexion a nuestra base de datos mysql
const connection  = mysql.createConnection({
    host: config.HOST, //Porque estamos llamando desde config nuestras variables
    database: config.DB,
    user: config.USER,
    password: config.PASSWORD
});//Si algo sale mal, lo marcara en estos campos y quiza el error pueda estar en constants.js

//Aca se va a inicializar una conexion
const getConnection = () =>{
    return connection
}

module.exports = {
    getConnection
}
