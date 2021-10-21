import {Router} from "express";
import{
    getProductosAllController,
    getProductosController,
    createProductosController,
    updateProductosController,
    deleteProductosController
} from "../controllers/productos.controller";

class Productos {
    public router: Router;
    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        /**
         * @api {get} / Consulta de todos los productos
         * @apiName getProductosAll
         * @apiGroup productos
         *
         * @apiSuccess {String} Descripción del producto
         * @apiSuccess {Number} precio del producto
         * @apiSuccess {Number} cantidad del producto
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *          "descripcion": "Lenovo",
         *          "precio": 750.25,
         *          "cantidad": 42
         *     }
         *
         * @apiError OrdenNotFound No se encontraron los productos
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.get("/", getProductosAllController);

        /**
         * @api {get} /:id Consulta de un producto por su id
         * @apiName getProductos
         * @apiGroup productos
         *
         * @apiSuccess {String} Descripción del producto
         * @apiSuccess {Number} precio del producto
         * @apiSuccess {Number} cantidad del producto
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *          "descripcion": "Lenovo",
         *          "precio": 750.25,
         *          "cantidad": 42
         *     }
         *
         * @apiError OrdenNotFound No se encontraron el productos
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.get("/:id", getProductosController);

        /**
         * @api {post} / Registro de un producto
         * @apiName createProductos
         * @apiGroup productos
         *
         * @apiSuccess {String} Descripción del producto
         * @apiSuccess {Number} precio del producto
         * @apiSuccess {Number} cantidad del producto
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *          "descripcion": "laptops",
         *          "precio": 750.25,
         *          "cantidad": 42
         *     }
         *
         * @apiError OrdenNotFound No se pudo registrar el producto
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.post("/", createProductosController);

        /**
         * @api {put} /:id Actualización de un producto
         * @apiName updateProductos
         * @apiGroup productos
         *
         * @apiSuccess {String} Descripción del producto
         * @apiSuccess {Number} precio del producto
         * @apiSuccess {Number} cantidad del producto
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *          "descripcion": "laptops",
         *          "precio": 750.25,
         *          "cantidad": 42
         *     }
         *
         * @apiError OrdenNotFound No se pudo actualizar el producto
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.put("/:id", updateProductosController);

        /**
         * @api {delete} /:id Eliminacion de un producto
         * @apiName deleteProductos
         * @apiGroup productos
         *
         * @apiSuccess {String} Descripción del producto
         * @apiSuccess {Number} precio del producto
         * @apiSuccess {Number} cantidad del producto
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *          "descripcion": "laptops",
         *          "precio": 750.25,
         *          "cantidad": 42
         *     }
         *
         * @apiError OrdenNotFound No se pudo eliminar el producto
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.delete("/:id", deleteProductosController);
    }
}

const productos = new Productos();
export default productos.router;