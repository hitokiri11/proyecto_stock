"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const categorias_productos_routes_1 = __importDefault(require("./routes/categorias_productos.routes"));
const productos_routes_1 = __importDefault(require("./routes/productos.routes"));
const ventas_routes_1 = __importDefault(require("./routes/ventas.routes"));
const ordenes_routes_1 = __importDefault(require("./routes/ordenes.routes"));
const reportes_routes_1 = __importDefault(require("./routes/reportes.routes"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.config();
        this.routes();
    }
    config() {
        //connection mongodb atlas
        const stock = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
        //mongoose.set("useFindAndModify", true);
        mongoose_1.default
            .connect(stock)
            .then((db) => console.log("Connected to database"))
            .catch((err) => {
            console.error(`Error connecting to the database. \n${err}`);
        });
        //Settings
        this.app.set("port", process.env.PORT || 3000);
        //Middlewares
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.app.use(index_1.default);
        this.app.use("/api/categoria_productos", categorias_productos_routes_1.default);
        this.app.use("/api/productos", productos_routes_1.default);
        this.app.use("/api/ventas", ventas_routes_1.default);
        this.app.use("/api/ordenes", ordenes_routes_1.default);
        this.app.use("/api/reportes", reportes_routes_1.default);
    }
    start() {
        this.app.listen(this.app.get("port"), () => {
            console.log("Server on port:", this.app.get("port"));
        });
    }
}
const server = new Server();
server.start();
