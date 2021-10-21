"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportes_controller_1 = require("../controllers/reportes.controller");
class Reportes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get("/:fecha", reportes_controller_1.getReportVentasDiarias);
    }
}
const reportes = new Reportes();
exports.default = reportes.router;
