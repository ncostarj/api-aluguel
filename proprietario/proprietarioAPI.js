const { ProprietarioController } = require("./proprietarioController");
const { BaseRoute } = require('../common/baseRoute');

const baseRoute = new BaseRoute(ProprietarioController);

const prepararResponse = (status, data, message) => {
    return { status, data, message }
}

const buscar = async (req, res) => {

    let response;
    try {
        const data = await ProprietarioController.buscar(req.query);
        response = prepararResponse(200, data, 'Dados retornados com sucesso!');
    } catch(e) {        
        response = prepararResponse(500, null, e.message);
    }

    res.status(response.status).json(response);
}

const incluir = async (req, res) => {
    let response;
    try {
        const data = await ProprietarioController.buscar(req.query);
        response = prepararResponse(200, data, 'Dados retornados com sucesso!');
    } catch(e) {        
        response = prepararResponse(500, null, e.message);
    }

    res.status(response.status).json(response);
}

module.exports.routes = (router) => {
    router.get("/", buscar);
    // router.get("/:id", ProprietarioController.encontrar);
    router.post("/", incluir);
    // router.patch("/:id", ProprietarioController.alterar);
    // router.delete("/:id", ProprietarioController.apagar);
    return router;
}