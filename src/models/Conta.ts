import { model, Schema, Model, Document } from 'mongoose';

interface IBanco extends Document {
  nome: string;
  codigo: string;
}

export const BancoSchema: Schema = new Schema({
  nome: { type: String, required: true },
  codigo: { type: String, required: true }
},{
  _id: false,
  versionKey: false, 
});

export interface IConta extends Document {
  agencia: string;
  numeroConta: string;
  banco: Array<IBanco>;
  isPrincipal: boolean;
}

export const ContaSchema: Schema = new Schema({
  agencia: String,
  numeroConta: String,
  banco: BancoSchema,
  isPrincipal: Boolean
},{
  _id: false,
  versionKey: false, 
});

export const Conta: Model<IConta> = model('Conta', ContaSchema);