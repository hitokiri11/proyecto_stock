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
exports.deleteCatProductServices = exports.updateCatProductServices = exports.createCatProductServices = exports.getCatProductsServices = exports.getCatProductsAllServices = void 0;
const categorias_productos_model_1 = __importDefault(require("../models/categorias_productos.model"));
function getCatProductsAllServices() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield categorias_productos_model_1.default.find();
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.getCatProductsAllServices = getCatProductsAllServices;
function getCatProductsServices(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield categorias_productos_model_1.default.findOne({ _id: id });
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.getCatProductsServices = getCatProductsServices;
function createCatProductServices(catproduct) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield catproduct.save();
            return catproduct;
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.createCatProductServices = createCatProductServices;
function updateCatProductServices(id, catproduct) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield categorias_productos_model_1.default.findOneAndUpdate({ _id: id, catproduct });
            return catproduct;
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.updateCatProductServices = updateCatProductServices;
function deleteCatProductServices(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield categorias_productos_model_1.default.findOneAndRemove({ _id: id });
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.deleteCatProductServices = deleteCatProductServices;
