import { model, Schema, Model, Document } from 'mongoose';

export interface IContato extends Document {
  tipo: string,
  valor: string,
}

export const ContatoSchema: Schema = new Schema({  
  tipo: String,
  valor: String
},{
  _id: false,
  versionKey: false, 
});

export const Contato: Model<IContato> = model('Contato', ContatoSchema);