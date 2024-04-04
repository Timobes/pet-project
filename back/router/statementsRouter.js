const Router = require('express')
const statementRouter = new Router()

const tokenMeddleware = require('../meddleware/tokenMeddleware')
const adminMeddleware = require('../meddleware/isAdminMeddleware')

const statementController = require('../controller/statementsController')

// Все статьи
statementRouter.get('/', tokenMeddleware, statementController.getAllState)

// Статьи по id
statementRouter.get('/:id', tokenMeddleware, statementController.getOneState)

// Сделать пост
statementRouter.post('/', tokenMeddleware,  statementController.createState)

// Обновить статус поста по id
statementRouter.put('/:id', tokenMeddleware, adminMeddleware,  statementController.changeStatusState)

// Удалить пост по id
statementRouter.delete('/:id', tokenMeddleware, adminMeddleware,  statementController.deleteState)

module.exports = statementRouter