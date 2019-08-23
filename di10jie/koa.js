const koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const session = require('koa-session')



let app = new koa()

app.context.db = require('./mysql/sql')

app.listen(8080, () => {
  console.log('请访问localhost:8080')
})

app.keys=[
  'asdfafadfdsfdassafdsa',
  'asfdafasdfdsafsadfsa',
  'adfasdfasdfdsafdsafsadf'
]
app.use(session({
  maxAge: 20*60*1000, // 有效期
  renew: true // 自动续期
}, app))

// ctx

let router = new Router() // 总路由
router.get('/', async ctx => {
  if (!ctx.session['view']) {
    ctx.session['view'] = 0
  }
  ctx.session['view']++
  // ctx.body = `欢迎第${ctx.session.view}次来访`
  let data = await ctx.db.query('select name from nideshop_category')
  ctx.body = data
})
// let userRouter = new Router() // 用户路由
// let company = new Router() // 企业用户路由
// company.get('/a', async ctx => {
//   ctx.body = '企业的aaa'
// })

// let admin = new Router() // 管理员用户路由
// admin.get('/a', ctx => {
//   ctx.body = '管理员的body'
// })

// userRouter.use('/company1', company.routes())
// userRouter.use('/admin', admin.routes())

router.use('/user', require('./routers/user/index')) // 符合/user的全部分给用户路由




// router.get('/a', async ctx => {
//   ctx.body='hahaha'
// })

app.use(router.routes())
app.use(static('./public', {
  maxage: 24 * 60 * 60 * 1000
}))