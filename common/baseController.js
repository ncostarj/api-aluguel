module.exports.BaseController = class BaseController {

  /**
   * Prepara a busca para ser enviada ao banco.
   * @param {JSON} json
   * @return JSON
   */
  static prepararBusca(json) {
    for( att in json ) {

      console.log(att, json, typeof(json[att]));

      if(att.indexOf('.') == -1) {
        json[att] = new RegExp(json[att],'i');
      } 

    }
    return json;
  }

  /**
   * Envia uma resposta padrao em json
   * @param {Request} req 
   * @param {Response} res 
   * @param {JSON} result
   */
  static enviarResposta(req, res, result) {
    const json = { ...result };    
    res.status(result.status).json(json)
  }

  static prepararResponse(httpStatus, message, data) {
    return { status: httpStatus, message, data }
  }
}