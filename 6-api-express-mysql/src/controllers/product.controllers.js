/*
//acciones a nuestra base de datos, por lo que debemos conectarnos a nuestra base de datos
import {getConnection} from "./../commons/Connection" //asi el controlador sabe que debe conectarse a una base de datos

const getProducts = async (req,res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM products");
        res.json(result)
    }catch (error){
        res.status(404);
        res.send(error.message)
    }
}

const getProduct = async (req,res) =>{
    try{
        const { sku } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM products WHERE sku = ?", sku);
        res.json(result)
    }catch (error){
        res.status(404);
        res.send(error.message)
    }
}

const addProduct = async (req,res) =>{
    try{
        const { sku, name_product, price } = req.body;// esta const no deja avanzar a menos que se llenen esos campos, no se ejecuta el la peticion
        if (sku === undefined || name_product === undefined || price === undefined){
            res.status(400).json({message:"Bad request. Please fill all field."})
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO `products`(`sku`, `name_product`, `price`, `description_product`, `url_image`) VALUES (?,?,?,?,?)", [sku, name_product, price, description_product, url_image]);
        res.json(result)
    }catch (error){
        res.status(404);
        res.send(error.message)
    }
}

const updateProduct = async (req,res) =>{
    try{
        const {sku} = req.params;
        const { name_product, price } = req.body;
        if (name_product === undefined || price === undefined){
            res.status(400).json({message:"Bad request. Please fill all field."})
        }
        const product ={ name_product, price, description_product, url_image};
        const connection = await getConnection();
        const result = await connection.query("UPDATE products SET = ? WHERE sku = ? ", [product, sku]);
        res.json(result)
    }catch (error){
        res.status(404);
        res.send(error.message)
    }
}

const deleteProduct = async (req,res) =>{
    try{
        const {sku} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM products WHERE sku = ? ", sku);
        res.json(result)
    }catch (error){
        res.status(404);
        res.send(error.message)
    }
}

export const methods = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
}
*/
/*Esta const result equivale a los services, a la dao, y es como si fuera lo de la carpeta services del proyecto de sensei Montoyita
- el res se refiere al resultado que esperamos que en este caso es la BD y esta dentro de la const result, por eso se pone al lado del .json*/



import {getConnection} from "./../commons/Connection"

const getProducts = async (req, res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM products");
        res.json(result)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

const getProduct = async (req, res) =>{
    try{
        const { sku } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM products WHERE sku = ?", sku);
        res.json(result)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

const addProduct = async (req, res) =>{
    try{
        const { sku, name_product, price, description_product, url_image } = req.body;
        if (sku === undefined || name_product === undefined || price === undefined || price === description_product || url_image === undefined ){
            res.status(400).json({message:"Bad Request. Please fill all field."})
        }
        const connection = await getConnection();
        const result = await connection.query("INSERT INTO `products`(`sku`, `name_product`, `price`, `description_product`, `url_image`) VALUES (?,?,?,?,?)", [sku, name_product, price, description_product, url_image]);
        res.json(result)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

const updateProduct = async (req, res) =>{
    try{
        const {sku} = req.params;
        const { name_product, price, description_product, url_image } = req.body;
        if (name_product === undefined || price === undefined ){
            res.status(400).json({message:"Bad Request. Please fill all field."})
        }
        const connection = await getConnection();
        const result = await connection.query("UPDATE products SET `name_product`= ?,`price`=?,`description_product`=?,`url_image`=? WHERE sku= ?", [name_product, price, description_product, url_image,sku]);
        res.json(result)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

const deleteProduct = async (req, res) =>{
    try{
        const {sku} = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM products WHERE sku= ?", sku);
        res.json(result)
    }catch (error){
        res.status(500);
        res.send(error.message)
    }
}

export const methods = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,

}
