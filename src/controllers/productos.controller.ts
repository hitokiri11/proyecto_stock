import {Request, Response} from "express";
import Productos, {IProductos} from "../models/productos.model";
import {ObjectId} from "mongodb";
import {
    getProductosAllServices,
    getProductosServices,
    createProductosServices,
    updateProductosServices,
    deleteProductosServices
} from "../services/productos.service";

export async function getProductosAllController(req: Request, res: Response){
    try{
        const productos = await getProductosAllServices();
        res.jsonp(productos);
    }catch(error: any){
        res.status(500).json({ status: 500, message: error.message});
    }
}

export async function getProductosController(req: Request, res: Response){
    try{
        const {id}          = req.params;
        const productos  = await getProductosServices(new ObjectId(id));
        res.jsonp(productos);
    }catch(error: any){
        res.status(500).json({ status:500, message: error.message});
    }
}

export async function createProductosController(req: Request, res: Response){
    try{
        const {descripcion, precio, cateroria, cantidad} = req.body;
        const new_productos: IProductos = new Productos({descripcion, precio, cateroria, cantidad});
        await createProductosServices(new_productos);
        res.jsonp(new_productos);
    }catch(error: any){
        res.status(500).json({ status:500, message: error.message});
    }
}

export async function updateProductosController(req: Request, res: Response){
    try{
        const {id}          = req.params;
        const productos  = await  updateProductosServices(new ObjectId(id), req.body);
        res.jsonp(productos);
    }catch(error: any){
        res.status(500).json({ status:500, message: error.message});
    }
}

export async function deleteProductosController(req: Request, res: Response){
    try{
        const {id} = req.params;
        const productos = await deleteProductosServices(new ObjectId(id));
        res.jsonp(productos);
    }catch(error: any){
        res.status(500).json({ status:500, message: error.message});
    }
}

