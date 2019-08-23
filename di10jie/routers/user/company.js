const Router = require('koa-router')

let router = new Router()

router.get('/a', ctx => {
  ctx.body = 'company的aaaa'
})

module.exports = router.routes()