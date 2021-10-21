import {Router} from "express";
import{
    getCatProductsAllController,
    getCatProductsController,
    createCatProductsController,
    updateCatProductsController,
    deleteCatProductsController
} from "../controllers/categorias_productos.controller";

class CatProduct {
    public router: Router;
    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){

        /**
         * @api {get} / Consulta de todas las categorías de productos
         * @apiName getCatProductsAll
         * @apiGroup categorías de productos
         *
         * @apiSuccess {String} Descripción del producto
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "descripcion": "laptops"
         *     }
         *
         * @apiError OrdenNotFound No se encontraron categorías de productos
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.get("/", getCatProductsAllController);

        /**
         * @api {get} /:id Consulta por id de categorías de productos
         * @apiName getCatProducts
         * @apiGroup categorías de productos
         *
         * @apiSuccess {String} Descripción del producto
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "descripcion": "laptops"
         *     }
         *
         * @apiError OrdenNotFound No se encontraron categorías de productos por el id
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.get("/:id", getCatProductsController);

        /**
         * @api {post} / Crea una categoría de producto
         * @apiName createCatProducts
         * @apiGroup categorías de productos
         *
         * @apiSuccess {String} Descripción del producto
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "descripcion": "laptops"
         *     }
         *
         * @apiError OrdenNotFound No se pudo guardar la categoría de producto
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.post("/:id", createCatProductsController);

        /**
         * @api {put} /:id Actualiza una categoría de producto
         * @apiName updateCatProducts
         * @apiGroup categorías de productos
         *
         * @apiSuccess {String} Descripción del producto
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "descripcion": "laptops"
         *     }
         *
         * @apiError OrdenNotFound No se pudo actualizar la categoría de producto
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.put("/:id", updateCatProductsController);

        /**
         * @api {delete} /:id Elimina una categoría de producto
         * @apiName deleteCatProducts
         * @apiGroup categorías de productos
         *
         * @apiSuccess {String} Descripción del producto
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "descripcion": "laptops"
         *     }
         *
         * @apiError OrdenNotFound No se pudo eliminar la categoría de producto
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.delete("/:id", deleteCatProductsController);
    }
}

const cat_products = new CatProduct();
export default cat_products.router;