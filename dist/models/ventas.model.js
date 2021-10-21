"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const VentasSchema = new mongoose_1.Schema({
    fecha: { type: Date, default: Date.now() },
    medio_pago: { type: Number, required: true },
    tipo_venta: { type: Number, required: true }
});
exports.default = (0, mongoose_1.model)('ventas', VentasSchema);
