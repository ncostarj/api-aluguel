const { Router } = require("express")

const ProprietarioAPI = require('../proprietario/proprietarioAPI');

module.exports.routes = (router) => {

    router.use('/proprietarios', ProprietarioAPI.routes(router));

    router.post('/', (req, res) => {
        return res.status(200).json({version: 1.0});
    });

    router.get('/', (req, res) => {
        return res.status(200).json({version: 1.0});
    });

    return router;
}