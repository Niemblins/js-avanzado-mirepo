//app nuestra lanzadora de lo que vamos a estar trabajando, esta manera de importar es con babel
import express from "express";
import morgan from "morgan";//morgan nos ayuda a hacer las peticiones como lo vimos en postman, con los verbos

//importando los productRoutes del archivo product.routes
import productRoutes from "./routes/product.routes";

//esta constante app es la que usamos en nuestro index
const app = express();//aca van nuestras settings

//setting the port
app.set("port", 4000);

//Middlewares integradores entre el acceso a la info y el uso de las API
app.use(morgan("dev"));//morgan es un Middleware que permite hacer la solicitud del request, para que nos devuelva un 200, 400 etc,
app.use(express.json());

//definir la ruta de endpoint central, o path
app.use("/api-restfull/products",productRoutes);

export default app;

