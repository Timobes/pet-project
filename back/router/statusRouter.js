const Router = require('express')
const statusRouter = new Router

const statusController = require('../controller/statusController')

statusRouter.get('/', statusController.getAllStatus)

statusRouter.get('/:id', statusController.getOneStatus)

module.exports = statusRouter
