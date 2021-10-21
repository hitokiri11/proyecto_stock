import {Request, Response} from "express";
import Ventas, {IVentas} from "../models/ventas.model";
import {ObjectId} from "mongodb";
import {
    getVentasAllServices,
    getVentasServices,
    createVentasServices,
    updateVentasServices,
    deleteVentasServices
} from "../services/ventas.service";

export async function getVentasAllController(req: Request, res: Response){
    try{
        const ventas = await getVentasAllServices();
        res.jsonp(ventas);
    }catch(error: any){
        res.status(500).json({ status: 500, message: error.message});
    }
}

export async function getVentasController(req: Request, res: Response){
    try{
        const {id}          = req.params;
        const ventas  = await getVentasServices(new ObjectId(id));
        res.jsonp(ventas);
    }catch(error: any){
        res.status(500).json({ status:500, message: error.message});
    }
}

export async function createVentasController(req: Request, res: Response){
    try{
        const {culminada,ordenes} = req.body;
        const new_ventas: IVentas = new Ventas({culminada,ordenes});
        await createVentasServices(new_ventas);
        res.jsonp(new_ventas);
    }catch(error: any){
        res.status(500).json({ status:500, message: error.message});
    }
}

export async function updateVentasController(req: Request, res: Response){
    try{
        const {id}          = req.params;
        const ventas  = await  updateVentasServices(new ObjectId(id), req.body);
        res.jsonp(ventas);
    }catch(error: any){
        res.status(500).json({ status:500, message: error.message});
    }
}

export async function deleteVentasController(req: Request, res: Response){
    try{
        const {id} = req.params;
        const ventas = await deleteVentasServices(new ObjectId(id));
        res.jsonp(ventas);
    }catch(error: any){
        res.status(500).json({ status:500, message: error.message});
    }
}

