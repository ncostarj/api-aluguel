const { Helper } = require("../libs/helper");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { Pessoa } = require("../pessoa/pessoa");
const { ContaSchema } = require("../conta/conta");
const { ContatoSchema } = require("../contato/contato");

const proprietarioSchema = new Schema(
  {
    conta: [ContaSchema],
    contatos: [ContatoSchema],
  },
  { versionKey: false, discriminatorKey: "tipo" }
);

proprietarioSchema.statics.salvar = function (proprietario, id = null) {
  let response;
  if (proprietario) {
    if (id) {
      response = Proprietario.updateOne(
        { _id: mongoose.Types.ObjectId(id) },
        proprietario
      );
    } else response = Proprietario.create(proprietario);
  }
  return response;
};

const Proprietario = Pessoa.discriminator("Proprietario", proprietarioSchema);

module.exports.ProprietarioSchema = proprietarioSchema;
module.exports.Proprietario = Proprietario;
