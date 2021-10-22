"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductosSchema = new mongoose_1.Schema({
    descripcion: { type: String, required: true, trim: true },
    precio: { type: Number, required: true, trim: true },
    categoria: { type: mongoose_1.Schema.Types.ObjectId, ref: "categoria_productos" },
    cantidad: { type: Number, required: true }
});
exports.default = (0, mongoose_1.model)('productos', ProductosSchema);
