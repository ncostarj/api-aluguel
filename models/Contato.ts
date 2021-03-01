import { model, Schema, Model, Document } from 'mongoose';

interface IContato extends Document {
  tipo: string,
  valor: string,
}

const ContatoSchema: Schema = new Schema({  
  tipo: { type: String, required: true },
  valor: { type: String, required: true }
});

export const Contato: Model<IContato> = model('Contato', ContatoSchema);