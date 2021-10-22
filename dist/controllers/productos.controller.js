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
exports.deleteProductosController = exports.updateProductosController = exports.createProductosController = exports.getProductosController = exports.getProductosAllController = void 0;
const productos_model_1 = __importDefault(require("../models/productos.model"));
const mongodb_1 = require("mongodb");
const productos_service_1 = require("../services/productos.service");
function getProductosAllController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const productos = yield (0, productos_service_1.getProductosAllServices)();
            res.jsonp(productos);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.getProductosAllController = getProductosAllController;
function getProductosController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const productos = yield (0, productos_service_1.getProductosServices)(new mongodb_1.ObjectId(id));
            res.jsonp(productos);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.getProductosController = getProductosController;
function createProductosController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { descripcion, precio, categoria, cantidad } = req.body;
            const new_productos = new productos_model_1.default({ descripcion, precio, categoria, cantidad });
            yield (0, productos_service_1.createProductosServices)(new_productos);
            res.jsonp(new_productos);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.createProductosController = createProductosController;
function updateProductosController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const productos = yield (0, productos_service_1.updateProductosServices)(new mongodb_1.ObjectId(id), req.body);
            res.jsonp(productos);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.updateProductosController = updateProductosController;
function deleteProductosController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const productos = yield (0, productos_service_1.deleteProductosServices)(new mongodb_1.ObjectId(id));
            res.jsonp(productos);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.deleteProductosController = deleteProductosController;
