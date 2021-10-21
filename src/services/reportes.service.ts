import Ordenes, {IOrdenes} from '../models/ordenes.model';
import Ventas, {IVentas} from '../models/ventas.model';
import Productos, {IProductos} from '../models/productos.model';

export async function getVentasDiarias(fecha_consulta: any){
    //$match: {fecha: new Date(fecha_consulta)}
    try{
            return await Ventas.aggregate([
                        {  
                            $match: {fecha: {$eq: new Date(fecha_consulta) }}
                        },
                        {
                                $lookup:{
                                    from: "ordenes",
                                    localField: "_id",
                                    foreignField: "venta",
                                    as: "reporte_fecha_ventas"
                                }
                        },
                        
                    ]);
    }catch(error: any){
        console.log(error);
        throw Error(error);
    }
}