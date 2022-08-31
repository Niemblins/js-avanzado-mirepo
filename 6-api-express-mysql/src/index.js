import app from "./app"

/*aca vamos a inicializar nuestra aplicacion, necesitamos que exista algo que escuche que ya esta en funcionamiento, esa es la funcion de nuestro index*/
const main = () =>{
    app.listen(app.get("port"));
    console.log('Server on por :" ${app.get("port")}');
};

main();