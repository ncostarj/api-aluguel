const { Helper } = require('../libs/helper');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bancoSchema = new Schema({
  nome: String,
  codigo: String
}, { _id:false, versionKey: false });

const contaSchema = new Schema({
  agencia: String,
  conta: String,
  banco: bancoSchema,
  principal: Boolean
}, { _id:false, versionKey: false });

module.exports.ContaSchema = contaSchema;
module.exports.Conta = mongoose.model('Conta', contaSchema);;