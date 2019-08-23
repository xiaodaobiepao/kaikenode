const Router = require('koa-router')

let router = new Router()

router.get('/a', ctx => {
  // ctx.body = 'admin的aaaa'
  console.log(ctx.method)
  console.log(ctx.url)
  console.log(ctx.path)
  console.log(ctx.query)
  console.log(ctx.ip)
  console.log(ctx.headers)
  // ctx.response.end(ctx.url)
  ctx.body = ctx.url
  // ctx.redirect('/path') // 重定向
  // ctx.assert(条件, code, msg)
  // ctx.state = 200 // 指定状态码
  // ctx.attachment // 帮助下载
})

module.exports = router.routes()