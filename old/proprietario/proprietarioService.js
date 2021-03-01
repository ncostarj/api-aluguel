const mongoose = require('mongoose');
const { Proprietario } = require('./proprietario');

module.exports.ProprietarioService = class ProprietarioService {

  static async buscar(proprietario) {
    return await Proprietario.find(proprietario);;
  }

  static async salvar(proprietario, id = null) {
    return await Proprietario.salvar(proprietario, id);
  }

  static async apagar(id) {
    // return await Proprietario.deleteOne({_id: mongoose.ObjectId(id)});
    return await Proprietario.deleteOne({_id: id});
  }

}