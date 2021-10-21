"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ordenes_controller_1 = require("../controllers/ordenes.controller");
class Ordenes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        /**
         * @api {get} / Consulta de todas las ordenes
         * @apiName getOrdenesAll
         * @apiGroup Ordenes
         *
         * @apiSuccess {Number} cantidad de productos seleccionados para la orden.
         * @apiSuccess {Date} Fecha en la que se realizó la orden.
         * @apiSuccess {String} Monto de la orden.
         * @apiSuccess {String} Monto neto de la orden.
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "cantidad": "5",
         *       "fecha": "2021-10-21T06:46:15.553+00:00",
         *       "monto": "3751.25",
         *       "monto_neto": "3188.56",
         *     }
         *
         * @apiError OrdenNotFound No se encontraron Ordenes.
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.get("/", ordenes_controller_1.getOrdenesAllController);
        /**
         * @api {get} /ordenes/:id Consulta una orden por id
         * @apiName getOrdenes
         * @apiGroup Ordenes
         *
         * @apiSuccess {Number} cantidad de productos seleccionados para la orden.
         * @apiSuccess {Date} Fecha en la que se realizó la orden.
         * @apiSuccess {String} Monto de la orden.
         * @apiSuccess {String} Monto neto de la orden.
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "cantidad": "5",
         *       "fecha": "2021-10-21T06:46:15.553+00:00",
         *       "monto": "3751.25",
         *       "monto_neto": "3188.56",
         *     }
         *
         * @apiError OrdenNotFound El id de la Orden no se encuentra.
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.get("/:id", ordenes_controller_1.getOrdenesController);
        /**
         * @api {post} /ordenes Creación de una orden de compra
         * @apiName createOrdenes
         * @apiGroup Ordenes
         *
         * @apiSuccess {Number} cantidad de productos seleccionados para la orden.
         * @apiSuccess {Date} Fecha en la que se realizó la orden.
         * @apiSuccess {String} Monto de la orden.
         * @apiSuccess {String} Monto neto de la orden.
         * @apiSuccess {String} Id deproducto
         * @apiSuccess {String} Id venta
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "cantidad": "5",
         *       "fecha": "2021-10-21T06:46:15.553+00:00",
         *       "monto": "3751.25",
         *       "monto_neto": "3188.56",
         *       "producto" : "613034cc06945da39f8a0244",
         *       "venta"    : "61710cc1210675d7ea71e6f3"
         *     }
         *
         *
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.post("/", ordenes_controller_1.createOrdenesController);
        /**
         * @api {put} /:id Actualización de una orden de compra
         * @apiName updateOrdenes
         * @apiGroup Ordenes
         *
         * @apiSuccess {Number} cantidad de productos seleccionados para la orden.
         * @apiSuccess {Date} Fecha en la que se realizó la orden.
         * @apiSuccess {String} Monto de la orden.
         * @apiSuccess {String} Monto neto de la orden.
         * @apiSuccess {String} Id deproducto
         * @apiSuccess {String} Id venta
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "cantidad": "5",
         *       "fecha": "2021-10-21T06:46:15.553+00:00",
         *       "monto": "3751.25",
         *       "monto_neto": "3188.56",
         *       "producto" : "613034cc06945da39f8a0244",
         *       "venta"    : "61710cc1210675d7ea71e6f3"
         *     }
         *
         *
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.put("/:id", ordenes_controller_1.updateOrdenesController);
        /**
         * @api {delete} /:id Elimina una orden de compra
         * @apiName deleteOrdenesOrdenes
         * @apiGroup Ordenes
         *
         * @apiSuccess {Number} cantidad de productos seleccionados para la orden.
         * @apiSuccess {Date} Fecha en la que se realizó la orden.
         * @apiSuccess {String} Monto de la orden.
         * @apiSuccess {String} Monto neto de la orden.
         * @apiSuccess {String} Id deproducto
         * @apiSuccess {String} Id venta
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "cantidad": "5",
         *       "fecha": "2021-10-21T06:46:15.553+00:00",
         *       "monto": "3751.25",
         *       "monto_neto": "3188.56",
         *       "producto" : "613034cc06945da39f8a0244",
         *       "venta"    : "61710cc1210675d7ea71e6f3"
         *     }
         *
         *
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.delete("/:id", ordenes_controller_1.deleteOrdenesController);
    }
}
const ordenes = new Ordenes();
exports.default = ordenes.router;
