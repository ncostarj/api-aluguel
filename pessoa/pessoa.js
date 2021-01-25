const { Helper } = require('../libs/helper');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pessoaSchema = new Schema({
  nome: String,
  rg: String,
  cpf: String,
}, { versionKey: false, discriminatorKey: 'tipo', timestamps: { createdAt: 'dataCriacao', updatedAt: 'dataAtualizacao' } });

// pessoaSchema.statics.salvar = function() {
//   console.log('staticsProprietario');
//   // const teste = new this(proprietario);
//   // this.save();
//   // // return ProprietarioSchema.create(proprietario);
// };

module.exports.PessoaSchema = pessoaSchema;
module.exports.Pessoa = mongoose.model('Pessoa', pessoaSchema, 'pessoas');