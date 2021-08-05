const koaRouter = require('koa-router')
const user = require('./controller/user-controller')

const router = koaRouter()

router.prefix('/api')

router.get('/user', user.getUser)

module.exports = router