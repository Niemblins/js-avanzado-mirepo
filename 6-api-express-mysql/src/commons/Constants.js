/*
import { config } from "dotenv" //a dotenv le decimos que vamos a hacer esta parte de las variables de entorno

config();//aca la inicializamos
//aca metemos toda nuestra info
export default{//estas dentro son variables de entorno y nunca cambian son fijas y pueden mandarse llamar en cualquier parte del proyecto sin cambiar, gracias a dotenv
    host: process.env.HOST || '31.220.104.219',//estos valores pueden cambiar si asi lo decide el programador, por ejemplo si quiere cambiar de base de datos, sin necesidad de afectar el proyecto
    database: process.env.DATABASE || 'u917498081_dev_f',
    user: process.env.USER || 'u917498081_js_a',
    password: process.env.PASSWORD || '3st43sl4c0ntr4s3N14'
}//esta es la conexion a nuestra base de datos(que ya esta hostiada en el mundo)
*/


module.exports = {
    HOST: '31.220.104.219',
    DB: 'u917498081_dev_f',
    USER: 'u917498081_js_a',
    PASSWORD: '3st43sl4c0ntr4s3N14'
};
