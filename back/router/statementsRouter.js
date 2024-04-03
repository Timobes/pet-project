const Router = require('express')
const statementRouter = new Router()

const statementController = require('../controller/statementsController')

statementRouter.get('/', statementController.getAllState)

statementRouter.get('/:id', statementController.getOneState)

statementRouter.post('/', statementController.createState)

statementRouter.put('/:id', statementController.changeStatusState)

statementRouter.delete('/:id', statementController.deleteState)

module.exports = statementRouter