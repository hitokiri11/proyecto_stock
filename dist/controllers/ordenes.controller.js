"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOrdenesController = exports.updateOrdenesController = exports.createOrdenesController = exports.getOrdenesController = exports.getOrdenesAllController = void 0;
const ordenes_model_1 = __importDefault(require("../models/ordenes.model"));
const ventas_model_1 = __importDefault(require("../models/ventas.model"));
const productos_service_1 = require("../services/productos.service");
const ventas_service_1 = require("../services/ventas.service");
const mongodb_1 = require("mongodb");
const ordenes_service_1 = require("../services/ordenes.service");
let venta = null;
let arrOrdenes = [];
function getOrdenesAllController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ordenes = yield (0, ordenes_service_1.getOrdenesAllServices)();
            res.jsonp(ordenes);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.getOrdenesAllController = getOrdenesAllController;
function getOrdenesController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const ordenes = yield (0, ordenes_service_1.getOrdenesServices)(new mongodb_1.ObjectId(id));
            res.jsonp(ordenes);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.getOrdenesController = getOrdenesController;
function createOrdenesController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { cantidadd, productoo, medio_pago, tipo_venta } = req.body;
            const new_ventas = new ventas_model_1.default({ medio_pago, tipo_venta }); //se crea registro de venta y se usa el id
            const venta_obj = yield (0, ventas_service_1.createVentasServices)(new_ventas);
            const venta = venta_obj.id;
            let precio = 0;
            let monto = 0;
            let monto_neto = 0;
            let new_ordenes_last;
            for (let i in cantidadd) {
                const detalle_producto = yield (0, productos_service_1.getProductosServices)(new mongodb_1.ObjectId(productoo[i]));
                if (detalle_producto) {
                    let cantidad_p = (detalle_producto.cantidad - cantidadd[i]); //valor que se debe actualizar en la tabla productos
                    precio = detalle_producto.precio;
                    monto = (precio * cantidadd[i]);
                    monto_neto = monto - (monto * 0.15);
                }
                console.log("cantidad ");
                console.log(cantidadd[i]);
                let cantidad = cantidadd[i];
                let producto = productoo[i];
                const new_ordenes = new ordenes_model_1.default({ cantidad, monto, monto_neto, producto, venta });
                yield (0, ordenes_service_1.createOrdenesServices)(new_ordenes);
                new_ordenes_last = new_ordenes;
            }
            res.jsonp(new_ordenes_last);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.createOrdenesController = createOrdenesController;
function updateOrdenesController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const ordenes = yield (0, ordenes_service_1.updateOrdenesServices)(new mongodb_1.ObjectId(id), req.body);
            res.jsonp(ordenes);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.updateOrdenesController = updateOrdenesController;
function deleteOrdenesController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const ordenes = yield (0, ordenes_service_1.deleteOrdenesServices)(new mongodb_1.ObjectId(id));
            res.jsonp(ordenes);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.deleteOrdenesController = deleteOrdenesController;
