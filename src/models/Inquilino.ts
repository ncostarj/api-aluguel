import { Schema, Model, Document } from 'mongoose';
import { Pessoa } from './Pessoa';

interface IInquilino extends Document {}

const InquilinoSchema = new Schema({}, 
{ versionKey: false, discriminatorKey: 'tipo' });

const Inquilino: Model<IInquilino> = Pessoa.discriminator('Inquilino', InquilinoSchema);

export class InquilinoRepository {

  async search(inquilino: any = {}) {
    return await Inquilino.find(inquilino);
  }

  async store(inquilino: any) {
    return await Inquilino.create(inquilino);
  }

  async update(inquilino: any) {
    return await Inquilino.updateOne({});
  }

  async delete(inquilino: any) {
    return await Inquilino.deleteOne({});
  }

}