const Router = require('express')
const router = new Router()

const userRouter = require('../router/usersRouter')
const authRouter = require('../router/authRouter')

router.use('/users', userRouter)
router.use('/auth', authRouter)

module.exports = router