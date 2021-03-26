import { Schema, Model, Document } from 'mongoose';
import { Pessoa } from './Pessoa';

interface IProprietario extends Document {}

const ProprietarioSchema = new Schema({}, 
{ versionKey: false, discriminatorKey: "tipo" });

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