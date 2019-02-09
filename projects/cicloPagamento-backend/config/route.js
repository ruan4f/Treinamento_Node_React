const express = require('express')
const router = express.Router()

module.exports = (server) => {

    server.use('/api', router)
    const cicloPagamentoService = require('../api/cicloPagamento/cicloPagamentoService')
    cicloPagamentoService.register(router, '/cicloPagamentos')

}
