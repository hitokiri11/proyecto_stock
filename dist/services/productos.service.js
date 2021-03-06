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
exports.deleteProductosServices = exports.updateProductosServices = exports.createProductosServices = exports.getProductosServices = exports.getProductosAllServices = void 0;
const productos_model_1 = __importDefault(require("../models/productos.model"));
function getProductosAllServices() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield productos_model_1.default.find();
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.getProductosAllServices = getProductosAllServices;
function getProductosServices(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield productos_model_1.default.findOne({ _id: id });
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.getProductosServices = getProductosServices;
function createProductosServices(producto) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield producto.save();
            return producto;
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.createProductosServices = createProductosServices;
function updateProductosServices(id, producto) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield productos_model_1.default.update({ _id: id }, { $set: producto });
            return producto;
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.updateProductosServices = updateProductosServices;
function deleteProductosServices(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield productos_model_1.default.findOneAndRemove({ _id: id });
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.deleteProductosServices = deleteProductosServices;
