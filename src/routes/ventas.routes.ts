import {Router} from "express";
import{
    getVentasAllController,
    getVentasController,
    createVentasController,
    updateVentasController,
    deleteVentasController
} from "../controllers/ventas.controller";

class Ventas {
    public router: Router;
    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        /**
         * @api {get} / Consulta de todas las ventas
         * @apiName getVentasAll
         * @apiGroup ventas
         *
         * @apiSuccess {Date} Fecha en que se registró la venta
         * @apiSuccess {Number} Medio de pago la venta
         * @apiSuccess {Number} tipo de venta
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "fecha": "2021-10-21T06:46:15.535+00:00",
         *       "medio_pago": 2,
         *       "tipo_venta"
         *     }
         *
         * @apiError OrdenNotFound No se encontraron las ventas
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.get("/", getVentasAllController);

        /**
         * @api {get} /:id Consulta de ventas por su id
         * @apiName getVentas
         * @apiGroup ventas
         *
         * @apiSuccess {Date} Fecha en que se registró la venta
         * @apiSuccess {Number} Medio de pago la venta
         * @apiSuccess {Number} tipo de venta
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "fecha": "2021-10-21T06:46:15.535+00:00",
         *       "medio_pago": 2,
         *       "tipo_venta"
         *     }
         *
         * @apiError OrdenNotFound No se encontró la venta
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.get("/:id", getVentasController);

        /**
         * @api {post} / Registro de una venta
         * @apiName createVentas
         * @apiGroup ventas
         *
         * @apiSuccess {Date} Fecha en que se registró la venta
         * @apiSuccess {Number} Medio de pago la venta
         * @apiSuccess {Number} tipo de venta
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "fecha": "2021-10-21T06:46:15.535+00:00",
         *       "medio_pago": 2,
         *       "tipo_venta"
         *     }
         *
         * @apiError OrdenNotFound No se pudo guardar la venta
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.post("/", createVentasController);

        /**
         * @api {put} / Actualización de una venta
         * @apiName updateVentas
         * @apiGroup ventas
         *
         * @apiSuccess {Date} Fecha en que se registró la venta
         * @apiSuccess {Number} Medio de pago la venta
         * @apiSuccess {Number} tipo de venta
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "fecha": "2021-10-21T06:46:15.535+00:00",
         *       "medio_pago": 2,
         *       "tipo_venta"
         *     }
         *
         * @apiError OrdenNotFound No se pudo actualizar la venta
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.put("/:id", updateVentasController);


        /**
         * @api {delete} /:id Eliminación de una venta
         * @apiName deleteVentas
         * @apiGroup ventas
         *
         * @apiSuccess {Date} Fecha en que se registró la venta
         * @apiSuccess {Number} Medio de pago la venta
         * @apiSuccess {Number} tipo de venta
         *
         * @apiSuccessExample Success-Response:
         *     HTTP/1.1 200 OK
         *     {
         *       "fecha": "2021-10-21T06:46:15.535+00:00",
         *       "medio_pago": 2,
         *       "tipo_venta"
         *     }
         *
         * @apiError OrdenNotFound No se pudo eliminar la venta
         *
         * @apiErrorExample Error-Response:
         *     HTTP/1.1 404 Not Found
         *     {
         *       "error": "OrdenNotFound"
         *     }
         */
        this.router.delete("/:id", deleteVentasController);
    }
}

const ventas = new Ventas();
export default ventas.router;