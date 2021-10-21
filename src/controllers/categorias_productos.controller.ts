import {Request, Response} from "express";
import CatProduct, {ICatProduct} from "../models/categorias_productos.model";
import {ObjectId} from "mongodb";
import {
    getCatProductsAllServices,
    getCatProductsServices,
    createCatProductServices,
    updateCatProductServices,
    deleteCatProductServices
} from "../services/categorias_productos.service";

export async function getCatProductsAllController(req: Request, res: Response){
    try{
        console.log("aui");
        const cat_products = await getCatProductsAllServices();
        console.log(cat_products);
        res.jsonp(cat_products);
    }catch(error: any){
        res.status(500).json({ status: 500, message: error.message});
    }
}

export async function getCatProductsController(req: Request, res: Response){
    try{
        console.log("aui");
        const {id}          = req.params;
        const cat_products  = await getCatProductsServices(new ObjectId(id));
        console.log(cat_products);
        res.jsonp(cat_products);
    }catch(error: any){
        res.status(500).json({ status:500, message: error.message});
    }
}

export async function createCatProductsController(req: Request, res: Response){
    try{
        const {descripcion}                 = req.body;
        const new_cat_products: ICatProduct = new CatProduct({descripcion});
        await createCatProductServices(new_cat_products);
        res.jsonp(new_cat_products);
    }catch(error: any){
        res.status(500).json({ status:500, message: error.message});
    }
}

export async function updateCatProductsController(req: Request, res: Response){
    try{
        const {id}          = req.params;
        const cat_products  = await  updateCatProductServices(new ObjectId(id), req.body);
        console.log(cat_products);
        res.jsonp(cat_products);
    }catch(error: any){
        res.status(500).json({ status:500, message: error.message});
    }
}

export async function deleteCatProductsController(req: Request, res: Response){
    try{
        const {id} = req.params;
        const cat_products = await deleteCatProductServices(new ObjectId(id));
        console.log(cat_products);
        res.jsonp(cat_products);
    }catch(error: any){
        res.status(500).json({ status:500, message: error.message});
    }
}

