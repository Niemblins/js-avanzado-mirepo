import { Router } from "express";//aca se importan las rutas
import { methods as productController } from ",/../controllers/product.controller"
/**En este import van los metodos que tenemos en controllers, y estos van para cada verbo que tenemos alla */

//Esta const va a invocar al rout
const router = Router();

router.get("/", productController.getProducts);
router.get("/:sku", productController.getProduct);//SKU:consulta un objeto
router.post("/", productController.addProduct);
router.put("/:sku", productController.updateProduct);
router.delete("/:sku", productController.deleteProduct);

//Para que esto se pueda ecportar se deben usar las rutas
export default router;