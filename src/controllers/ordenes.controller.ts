import {Request, Response} from "express";
import Ordenes, {IOrdenes} from "../models/ordenes.model";
import Ventas, {IVentas} from '../models/ventas.model';
import {getProductosServices} from "../services/productos.service";
import {
    createVentasServices
} from "../services/ventas.service";
import {ObjectId} from "mongodb";
import {
    getOrdenesAllServices,
    getOrdenesServices,
    createOrdenesServices,
    updateOrdenesServices,
    deleteOrdenesServices
} from "../services/ordenes.service";

let venta:any = null;
let arrOrdenes:any[] =[]; 

export async function getOrdenesAllController(req: Request, res: Response){
    try{
        const ordenes = await getOrdenesAllServices();
        res.jsonp(ordenes);
    }catch(error: any){
        res.status(500).json({ status: 500, message: error.message});
    }
}

export async function getOrdenesController(req: Request, res: Response){
    try{
        const {id}     = req.params;
        const ordenes  = await getOrdenesServices(new ObjectId(id));
        res.jsonp(ordenes);
    }catch(error: any){
        res.status(500).json({ status:500, message: error.message});
    }
}


export async function createOrdenesController(req: Request, res: Response){
    
    try{
        const {cantidadd, productoo, medio_pago,tipo_venta} = req.body;
        const new_ventas: IVentas = new Ventas({medio_pago,tipo_venta}); //se crea registro de venta y se usa el id
        const venta_obj     = await createVentasServices(new_ventas);
        const venta         = venta_obj.id;
        let precio          = 0;
        let monto           = 0;
        let monto_neto      = 0;
        let new_ordenes_last:any;

        for(let i in cantidadd){

            const detalle_producto  = await getProductosServices(new ObjectId(productoo[i]));
            
            if(detalle_producto){
                let cantidad_p = (detalle_producto.cantidad - cantidadd[i]);//valor que se debe actualizar en la tabla productos

                precio      = detalle_producto.precio;
                monto       = (precio * cantidadd[i]);
                monto_neto  = monto - (monto * 0.15);
            }
            console.log("cantidad ");
            console.log(cantidadd[i]);
            let cantidad = cantidadd[i];
            let producto = productoo[i];

            const new_ordenes: IOrdenes = new Ordenes({cantidad, monto, monto_neto, producto, venta});
            await createOrdenesServices(new_ordenes);
            new_ordenes_last = new_ordenes;
        }
        res.jsonp(new_ordenes_last);
        

    }catch(error: any){
        res.status(500).json({ status:500, message: error.message});
    }
}



export async function updateOrdenesController(req: Request, res: Response){
    try{
        const {id}          = req.params;
        const ordenes  = await  updateOrdenesServices(new ObjectId(id), req.body);
        res.jsonp(ordenes);
    }catch(error: any){
        res.status(500).json({ status:500, message: error.message});
    }
}

export async function deleteOrdenesController(req: Request, res: Response){
    try{
        const {id} = req.params;
        const ordenes = await deleteOrdenesServices(new ObjectId(id));
        res.jsonp(ordenes);
    }catch(error: any){
        res.status(500).json({ status:500, message: error.message});
    }
}

