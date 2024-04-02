const Router = require('express')
const router = new Router()

const userRouter = require('../router/usersRouter')
const authRouter = require('../router/authRouter')
const statementsRouter = require('../router/statementsRouter')

router.use('/users', userRouter)
router.use('/auth', authRouter)
router.use('/state', statementsRouter)


module.exports = router