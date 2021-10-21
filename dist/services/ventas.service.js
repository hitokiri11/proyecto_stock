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
exports.deleteVentasServices = exports.updateVentasServices = exports.createVentasServices = exports.getVentasServices = exports.getVentasAllServices = void 0;
const ventas_model_1 = __importDefault(require("../models/ventas.model"));
function getVentasAllServices() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield ventas_model_1.default.find();
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.getVentasAllServices = getVentasAllServices;
function getVentasServices(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield ventas_model_1.default.findOne({ _id: id });
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.getVentasServices = getVentasServices;
function createVentasServices(venta) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield venta.save();
            return venta;
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.createVentasServices = createVentasServices;
function updateVentasServices(id, venta) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield ventas_model_1.default.findOneAndUpdate({ _id: id, venta });
            return venta;
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.updateVentasServices = updateVentasServices;
function deleteVentasServices(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield ventas_model_1.default.findOneAndRemove({ _id: id });
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.deleteVentasServices = deleteVentasServices;
