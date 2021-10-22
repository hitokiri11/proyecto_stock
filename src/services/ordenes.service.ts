import Ordenes, {IOrdenes} from '../models/ordenes.model';
import {ObjectId} from "mongodb";

export async function getOrdenesAllServices() {
    try{
        return await Ordenes.find();
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}

export async function getOrdenesServices(id: ObjectId){
    try{    
        return await Ordenes.findOne({_id: id});
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}

export async function createOrdenesServices(orden: IOrdenes){
    try{
        console.log("orden ");
        console.log(orden);
        await orden.save();
        return orden;
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}

export async function updateOrdenesServices(id: ObjectId, orden: IOrdenes){
    try{
        await  Ordenes.update({_id: id},{$set: orden});
        return orden;
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}

export async function deleteOrdenesServices(id: ObjectId){
    try{    
        return await Ordenes.findOneAndRemove({_id: id});
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}