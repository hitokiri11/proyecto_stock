import CatProduct, {ICatProduct} from '../models/categorias_productos.model';
import {ObjectId} from "mongodb";

export async function getCatProductsAllServices() {
    try{
        return await CatProduct.find();
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}

export async function getCatProductsServices(id: ObjectId){
    try{    
        return await CatProduct.findOne({_id: id});
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}

export async function createCatProductServices(catproduct: ICatProduct){
    try{
        await catproduct.save();
        return catproduct;
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}

export async function updateCatProductServices(id: ObjectId, catproduct: ICatProduct){
    try{
        await  CatProduct.update({_id: id},{$set: catproduct});
        return catproduct;
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}

export async function deleteCatProductServices(id: ObjectId){
    try{    
        return await CatProduct.findOneAndRemove({_id: id});
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}