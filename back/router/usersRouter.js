const Router = require('express')
const userRouter = new Router()

const tokenMeddleware = require('../meddleware/tokenMeddleware')
const adminMeddleware = require('../meddleware/isAdminMeddleware')

const userController = require('../controller/userController')

// Выдать всех пользователей
userRouter.get('/', tokenMeddleware, userController.getUsers)

// Выдать пользователя по id
userRouter.get('/:id', tokenMeddleware, userController.getUser)

//Удалить пользователя по id
userRouter.delete('/:id', tokenMeddleware, adminMeddleware,  userController.deleteUser)

module.exports = userRouter