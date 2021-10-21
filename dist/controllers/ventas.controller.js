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
exports.deleteVentasController = exports.updateVentasController = exports.createVentasController = exports.getVentasController = exports.getVentasAllController = void 0;
const ventas_model_1 = __importDefault(require("../models/ventas.model"));
const mongodb_1 = require("mongodb");
const ventas_service_1 = require("../services/ventas.service");
function getVentasAllController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const ventas = yield (0, ventas_service_1.getVentasAllServices)();
            res.jsonp(ventas);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.getVentasAllController = getVentasAllController;
function getVentasController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const ventas = yield (0, ventas_service_1.getVentasServices)(new mongodb_1.ObjectId(id));
            res.jsonp(ventas);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.getVentasController = getVentasController;
function createVentasController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { culminada, ordenes } = req.body;
            const new_ventas = new ventas_model_1.default({ culminada, ordenes });
            yield (0, ventas_service_1.createVentasServices)(new_ventas);
            res.jsonp(new_ventas);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.createVentasController = createVentasController;
function updateVentasController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const ventas = yield (0, ventas_service_1.updateVentasServices)(new mongodb_1.ObjectId(id), req.body);
            res.jsonp(ventas);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.updateVentasController = updateVentasController;
function deleteVentasController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const ventas = yield (0, ventas_service_1.deleteVentasServices)(new mongodb_1.ObjectId(id));
            res.jsonp(ventas);
        }
        catch (error) {
            res.status(500).json({ status: 500, message: error.message });
        }
    });
}
exports.deleteVentasController = deleteVentasController;
