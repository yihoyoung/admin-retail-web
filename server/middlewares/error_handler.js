module.exports = async function(ctx, next) {
    try {
        await next()
    } catch(e) {
        ctx.status = e.statusCode || e.status || 500
        ctx.body = e.message
        switch(ctx.status) {
            case 401:
                ctx.set({'WWW-Authenticate': 'Baerer'})
                break
        }
    }
}