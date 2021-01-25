const { Helper } = require('../libs/helper');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contatoSchema = new Schema({
  descricao: String,
  tipo: String,
  valor: String,
}, { _id:false, versionKey: false });

module.exports.ContatoSchema = contatoSchema;
module.exports.Contato = mongoose.model('Contato', contatoSchema);