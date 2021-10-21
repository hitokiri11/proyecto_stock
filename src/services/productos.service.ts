import Productos, {IProductos} from '../models/productos.model';
import {ObjectId} from "mongodb";

export async function getProductosAllServices() {
    try{
        return await Productos.find();
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}

export async function getProductosServices(id: ObjectId){
    try{    
        return await Productos.findOne({_id: id});
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}

export async function createProductosServices(producto: IProductos){
    try{
        await producto.save();
        return producto;
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}

export async function updateProductosServices(id: ObjectId, producto: IProductos){
    try{
        await  Productos.findOneAndUpdate({_id: id, producto});
        return producto;
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}

export async function deleteProductosServices(id: ObjectId){
    try{    
        return await Productos.findOneAndRemove({_id: id});
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}