"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrdenesSchema = new mongoose_1.Schema({
    cantidad: { type: Number, required: true },
    fecha: { type: Date, default: Date.now() },
    monto: { type: String, required: true, trim: true },
    monto_neto: { type: String, required: true, trim: true },
    producto: { type: mongoose_1.Schema.Types.ObjectId, ref: "productos" },
    venta: { type: mongoose_1.Schema.Types.ObjectId, ref: "ventas" }
});
exports.default = (0, mongoose_1.model)('ordenes', OrdenesSchema);
