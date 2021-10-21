import express from "express";
import morgan from "morgan";
import routes from "./routes/index";
import mongoose from "mongoose";
import cors from "cors";

import catProducts from "./routes/categorias_productos.routes";
import productos from "./routes/productos.routes";
import ventas from "./routes/ventas.routes";
import ordenes from "./routes/ordenes.routes";
import reportes from "./routes/reportes.routes";

class Server {
  public app: express.Application;
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    //connection mongodb atlas
    const stock =
      "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
    //mongoose.set("useFindAndModify", true);
    mongoose
      .connect(stock, { "useFindAndModify": false })
      .then((db) => console.log("Connected to database"))
      .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
      });
    //Settings
    this.app.set("port", process.env.PORT || 3000);
    //Middlewares
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(morgan("dev"));
    this.app.use(cors());
  }

  routes() {
    this.app.use(routes);
    this.app.use("/api/categoria_productos", catProducts);
    this.app.use("/api/productos", productos);
    this.app.use("/api/ventas", ventas);
    this.app.use("/api/ordenes", ordenes);
    this.app.use("/api/reportes", reportes);
  }

  start() {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server on port:", this.app.get("port"));
    });
  }
}

const server = new Server();
server.start();