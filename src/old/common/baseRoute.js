
module.exports.BaseRoute = class BaseRoute {
    constructor(controller) {
        this.controller = controller
    }

    prepararResponse(status, data, message) {
        return { status, data, message }
    }
    
    static async buscar(req, res, controller){
        console.log(this);
        // let response;
        // try {
        //     console.log('1')
        //     const data = await this.controller.buscar(req.query);
        //     console.log('2', data)
        //     // response = this.prepararResponse(200, data, 'Dados retornados com sucesso!');
        // } catch(e) {
        //     console.log(e.message)     
        //     // response = this.prepararResponse(500, null, e.message);
        // }
    
        // res.status(response.status).json(response);
        res.status(200).json([]);
    }    
}
