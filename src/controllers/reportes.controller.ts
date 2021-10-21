import {Request, Response} from "express";
import {getVentasDiarias} from "../services/reportes.service";

export async function getReportVentasDiarias(req: Request, res: Response){
    console.log(req.params);
    try{
        const {fecha} = req.params;
        const reporte = await getVentasDiarias(fecha);
        res.jsonp(reporte);
    }catch(error: any){
        res.status(500).json({ status: 500, message: error.message});
    }
}