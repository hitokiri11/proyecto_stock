import {Schema, model, Document} from 'mongoose';

export interface IProductos extends Document {
    descripcion: string,
    precio: number,
    categoria: Schema.Types.ObjectId,
    cantidad: number
}

const ProductosSchema = new Schema(
    {
        descripcion: {type: String, required: true, trim: true},
        precio: {type: Number,required: true,trim: true},
        categoria: {type: Schema.Types.ObjectId, ref: "categoria_productos"},
        cantidad: {type: Number,required: true}
    }
);

export default model<IProductos>('productos',ProductosSchema);