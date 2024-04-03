const Router = require('express')
const router = new Router()

const userRouter = require('../router/usersRouter')
const authRouter = require('../router/authRouter')
const statementsRouter = require('../router/statementsRouter')
const statusRouter = require('../router/statusRouter')

router.use('/users', userRouter)
router.use('/auth', authRouter)
router.use('/state', statementsRouter)
router.use('/status', statusRouter)

module.exports = router