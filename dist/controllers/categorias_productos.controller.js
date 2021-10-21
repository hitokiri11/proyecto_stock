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
exports.deleteCatProductsController = exports.updateCatProductsController = exports.createCatProductsController = exports.getCatProductsController = exports.getCatProductsAllController = void 0;
const categorias_productos_model_1 = __importDefault(require("../models/categorias_productos.model"));
const mongodb_1 = require("mongodb");
const categorias_productos_service_1 = require("../services/categorias_productos.service");
function getCatProductsAllController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("aui");
            const cat_products = yield (0, categorias_productos_service_1.getCatProductsAllServices)();
            console.log(cat_products);
            res.jsonp(cat_products);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.getCatProductsAllController = getCatProductsAllController;
function getCatProductsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("aui");
            const { id } = req.params;
            const cat_products = yield (0, categorias_productos_service_1.getCatProductsServices)(new mongodb_1.ObjectId(id));
            console.log(cat_products);
            res.jsonp(cat_products);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.getCatProductsController = getCatProductsController;
function createCatProductsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { descripcion } = req.body;
            const new_cat_products = new categorias_productos_model_1.default({ descripcion });
            yield (0, categorias_productos_service_1.createCatProductServices)(new_cat_products);
            res.jsonp(new_cat_products);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.createCatProductsController = createCatProductsController;
function updateCatProductsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const cat_products = yield (0, categorias_productos_service_1.updateCatProductServices)(new mongodb_1.ObjectId(id), req.body);
            console.log(cat_products);
            res.jsonp(cat_products);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.updateCatProductsController = updateCatProductsController;
function deleteCatProductsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const cat_products = yield (0, categorias_productos_service_1.deleteCatProductServices)(new mongodb_1.ObjectId(id));
            console.log(cat_products);
            res.jsonp(cat_products);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.deleteCatProductsController = deleteCatProductsController;
