"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categorias_productos_controller_1 = require("../controllers/categorias_productos.controller");
class CatProduct {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
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
        this.router.get("/", categorias_productos_controller_1.getCatProductsAllController);
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
        this.router.get("/:id", categorias_productos_controller_1.getCatProductsController);
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
        this.router.post("/:id", categorias_productos_controller_1.createCatProductsController);
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
        this.router.put("/:id", categorias_productos_controller_1.updateCatProductsController);
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
        this.router.delete("/:id", categorias_productos_controller_1.deleteCatProductsController);
    }
}
const cat_products = new CatProduct();
exports.default = cat_products.router;
