const koaRouter = require('koa-router')
const user = require('./controller/user-controller')

const router = koaRouter()

router.prefix('/api')

router.get('/user', user.getUser)

export default router