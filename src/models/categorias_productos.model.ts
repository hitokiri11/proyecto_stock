import {Schema, model, Document} from 'mongoose';

export interface ICatProduct extends Document {
    descripcion: string
}

const CatProductSchema = new Schema(
    {
        descripcion: {type: String, required: true, trim: true}
    }
);

export default model<ICatProduct>('categoria_productos',CatProductSchema);