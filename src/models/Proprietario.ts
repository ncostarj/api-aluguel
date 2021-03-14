import { model, Schema, Model, Document } from 'mongoose';
import { Conta } from './Conta';
import { Contato } from './Contato';
import { Pessoa } from './Pessoa';

interface IProprietario extends Document {
  nome: string;
  rg: string;
  cpf: string;
  contas: Array<any>;
  contatos: Array<any>;
}

const ProprietarioSchema = new Schema({  
  contas: { type: Array, required: true },
  contatos: { type: Array, required: true },
}, { versionKey: false, discriminatorKey: "tipo" });

const Proprietario: Model<IProprietario> = Pessoa.discriminator('Proprietario', ProprietarioSchema);

export class ProprietarioRepository {

  async search(proprietario: any = {}) {
    return await Proprietario.find(proprietario);
  }

  async store(proprietario: any) {
    return await Proprietario.create(proprietario);
  }

  async update(proprietario: any) {
    return await Proprietario.updateOne({});
  }

  async delete(proprietario: any) {
    return await Proprietario.deleteOne({});
  }

}