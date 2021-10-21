import {Schema, model, Document} from 'mongoose';

export interface IVentas extends Document {
    fecha: Date,
    medio_pago: number, //1-debito, 2-pago movil, 3 efectivo
    tipo_venta: number //1-en sitio, 2-delivery, 3-pick-up
}

const VentasSchema = new Schema(
    {
        fecha: {type: Date,default: Date.now()},  
        medio_pago: {type: Number, required: true},
        tipo_venta: {type: Number, required: true}
    }
);

export default model<IVentas>('ventas',VentasSchema);