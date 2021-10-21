import {Schema, model, Document} from 'mongoose';

export interface IOrdenes extends Document {
    cantidad: number,
    fecha: Date,
    monto: string,
    monto_neto:string,
    producto: Schema.Types.ObjectId,
    venta: Schema.Types.ObjectId
}

const OrdenesSchema = new Schema(
    {
        cantidad: {type: Number,required: true},
        fecha: {type: Date,default: Date.now()},
        monto: {type: String, required: true, trim: true},
        monto_neto: {type: String, required: true, trim: true},
        producto: {type: Schema.Types.ObjectId, ref: "productos"},
        venta: {type: Schema.Types.ObjectId, ref: "ventas"}
    }
);

export default model<IOrdenes>('ordenes',OrdenesSchema);