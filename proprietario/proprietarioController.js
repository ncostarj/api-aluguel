const { ProprietarioService } = require('./proprietarioService');
const { BaseController } = require('../common/baseController');
const { Helper } = require('../libs/helper');

// const prepararBusca = (obj) => {

//   for( prop in obj ) {

//     console.log(prop, obj, typeof(obj[prop]));

//     if(prop.indexOf('.') == -1) {
//       obj[prop] = new RegExp(obj[prop],'i');
//     } 

//   }
//   return obj;
// }

module.exports.ProprietarioController = class ProprietarioController extends BaseController {

  /**
   * Busca um proprietario.
   * 
   */
  static async buscar(proprietario) {    
    return await ProprietarioService.buscar(proprietario);
  }

  // /**
  //  * Encontra um proprietario.
  //  * @param {Request} req 
  //  * @param {Response} res 
  //  */
  // static async encontrar(req, res) {
  //   let result, proprietario, data;
    
  //   try {
  //     proprietario = req.body;
  //     await ProprietarioService.salvar(proprietario);
  //     result = BaseController.prepararResponse(201, 'Proprietário salvo com sucesso!', 'OK');
  //   } catch(e) {      
  //     result = BaseController.prepararResponse(500, 'Erro', e.message);
  //   }

  //   res.status(result.status).send(result);   
  // }

  // /**
  //  * Inlcui um proprietario.
  //  * @param {Request} req 
  //  * @param {Response} res 
  //  */
  // static async incluir(req, res) {

  //   let result;
    
  //   try {
  //     await ProprietarioService.salvar(req.body);
  //     result = BaseController.prepararResponse(200, 'Proprietário incluído com sucesso!', 'OK');
  //   } catch(e) {      
  //     result = BaseController.prepararResponse(500, 'Erro', e.message);
  //   }

  //   res.status(result.status).send(result);

  // }

  // /**
  //  * Altera um proprietario.
  //  * @param {Request} req 
  //  * @param {Response} res 
  //  */
  // static async alterar(req, res) {

  //   let result;
    
  //   try {      
  //     await ProprietarioService.salvar(req.body, req.params.id);
  //     result = BaseController.prepararResponse(200, 'Proprietário atualizado com sucesso!', 'OK');
  //   } catch(e) {      
  //     result = BaseController.prepararResponse(500, 'Erro', e.message);
  //   }

  //   res.status(result.status).send(result);

  // }  

  // /**
  //  * Apaga um proprietario.
  //  * @param {Request} req 
  //  * @param {Response} res 
  //  */
  // static async apagar(req, res) {
  //   let result;
    
  //   try {
  //     await ProprietarioService.apagar(req.params.id);
  //     result = BaseController.prepararResponse(200, 'Proprietário excluído com sucesso!', 'OK');
  //   } catch(e) {      
  //     result = BaseController.prepararResponse(500, 'Erro', e.message);
  //   }

  //   res.status(result.status).send(result);
  // }  

}