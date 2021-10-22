"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportes_controller_1 = require("../controllers/reportes.controller");
class Reportes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        /**
         * @api {get} /:fecha Reporte General por fecha
         * @apiName getReportVentas
         * @apiGroup reportes
         *
         * @apiSuccess {Date} Fecha de la Venta
         * @apiSuccess {Number} Medio de Pago
         * @apiSuccess {Number} Tipo de Venta
         * @apiSuccess {Number} Cantidad
         * @apiSuccess {String} monto
         * @apiSuccess {String} monto_neto
         * @apiSuccess {String} id del producto
         * @apiSuccess {String} id de la venta
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "fecha": "2021-10-21T06:46:15.535Z",
                 "medio_pago": 2,
                 "tipo_venta": 1,
                 "cantidad": 5,
                 "fecha": "2021-10-21T06:46:15.553Z",
                 "monto": "3751.25",
                 "monto_neto": "3188.5625",
                 "producto": "613034cc06945da39f8a0244",
                 "venta": "61710cc1210675d7ea71e6f3"
         *
         *     }
         *
         * @apiError OrdenNotFound No se encontraron registros para el reporte
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.get("/:fecha", reportes_controller_1.getReportVentasDiarias);
    }
}
const reportes = new Reportes();
exports.default = reportes.router;
