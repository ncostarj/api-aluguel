import { model, Schema, Model, Document } from 'mongoose';

interface IPessoa extends Document {
  nome: string;
  rg: string;
  cpf: string;
}

const PessoaSchema: Schema = new Schema({
  nome: { type: String, required: true },
  rg: { type: String, required: true },
  cpf: { type: String, required: true }
}, 
{ 
  versionKey: false, 
  discriminatorKey: 'tipo', 
  timestamps: { 
    createdAt: 'dataCriacao', 
    updatedAt: 'dataAtualizacao' 
  }
});

export const Pessoa: Model<IPessoa> = model('Pessoa', PessoaSchema);