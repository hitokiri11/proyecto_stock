import Ventas, {IVentas} from '../models/ventas.model';
import {ObjectId} from "mongodb";


export async function getVentasAllServices() {
    try{
        return await Ventas.find();
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}

export async function getVentasServices(id: ObjectId){
    try{    
        return await Ventas.findOne({_id: id});
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}

export async function createVentasServices(venta: IVentas){
    try{
        await venta.save();
        return venta;
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}

export async function updateVentasServices(id: ObjectId, venta: IVentas){
    try{
        await  Ventas.update({_id: id},{$set: venta});
        return venta;
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}

export async function deleteVentasServices(id: ObjectId){
    try{    
        return await Ventas.findOneAndRemove({_id: id});
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}