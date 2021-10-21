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
exports.deleteOrdenesServices = exports.updateOrdenesServices = exports.createOrdenesServices = exports.getOrdenesServices = exports.getOrdenesAllServices = void 0;
const ordenes_model_1 = __importDefault(require("../models/ordenes.model"));
function getOrdenesAllServices() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield ordenes_model_1.default.find();
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.getOrdenesAllServices = getOrdenesAllServices;
function getOrdenesServices(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield ordenes_model_1.default.findOne({ _id: id });
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.getOrdenesServices = getOrdenesServices;
function createOrdenesServices(orden) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("orden ");
            console.log(orden);
            yield orden.save();
            return orden;
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.createOrdenesServices = createOrdenesServices;
function updateOrdenesServices(id, orden) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield ordenes_model_1.default.findOneAndUpdate({ _id: id, orden });
            return orden;
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.updateOrdenesServices = updateOrdenesServices;
function deleteOrdenesServices(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield ordenes_model_1.default.findOneAndRemove({ _id: id });
        }
        catch (error) {
            console.log(error);
            throw Error(error);
        }
    });
}
exports.deleteOrdenesServices = deleteOrdenesServices;
