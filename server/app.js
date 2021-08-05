const json = require('koa-json')
const koaBodyParser = require('koa-bodyparser')
const errorHandler = require('./middlewares/error_handler')
const router = require('./router')

const Koa = require('koa')
const app = new Koa()

app.use(errorHandler)
app.use(koaBodyParser())
app.use(json())
app.use(async (ctx, next) => {
    await next()
    const rt = ctx.response.get('X-Response-Time')
    console.log(`${ctx.method} ${ctx.url} - ${rt}`)
})


app.use(async (ctx, next) => {
    const start = Date.now()
    await next()
    const ms = Date.now() - start
    ctx.set('X-Response-Time', `${ms}ms`)
})

app.use(async (ctx, next) => {
    ctx.body = { msg: 'Hello World!', path: ctx.path, method: ctx.method}
    await next()
})

app.use(router.routes())

app.listen(3000)
