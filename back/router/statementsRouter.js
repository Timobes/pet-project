const Router = require('express')
const statementRouter = new Router()

const statementController = require('../controller/statementsController')

statementRouter.get('/', statementController.getAllState)

statementRouter.get('/:id', statementController.getOneState)

statementRouter.post('/', statementController.createState)

module.exports = statementRouter