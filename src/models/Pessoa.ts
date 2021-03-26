import { model, Schema, Model, Document } from 'mongoose';
import { ContaSchema, IConta } from './Conta';
import { ContatoSchema, IContato } from './Contato';

interface IPessoa extends Document {
  nome: string;
  rg: string;
  contas: Array<IConta>;
  contatos: Array<IContato>;
}

const PessoaSchema: Schema = new Schema({
  nome: String,
  rg: String,
  cpf: String,
  contas: [ContaSchema],
  contatos: [ContatoSchema]
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