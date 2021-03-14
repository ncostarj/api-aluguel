import { model, Schema, Model, Document } from 'mongoose';

interface IBanco extends Document {
  nome: String,
  codigo: String
}

interface IConta extends Document {
  agencia: String;
  conta: String;
  banco: IBanco;
  principal: Boolean;
}

const BancoSchema: Schema = new Schema({
  nome: { type: String, required: true },
  codigo: { type: String, required: true }
});

const ContaSchema: Schema = new Schema({
  agencia: { type: String, required: true },
  conta: { type: String, required: true },
  banco: { type: BancoSchema, required: true },
  principal: { type: Boolean, required: true }
});

export const Conta: Model<IConta> = model('Conta', ContaSchema);