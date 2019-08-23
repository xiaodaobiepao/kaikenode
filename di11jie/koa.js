const Koa = require('koa')
const ejs = require('koa-ejs')
const path = require('path')
const Router = require('koa-router')
const body = require('koa-better-body')
const path = require('path')


let app = new Koa()
app.listen(8080)
app.use(body({
  uploadDir: path.resolve(__dirname, './static/upload')
}))

ejs(app, {
  root: path.resolve(__dirname, 'template'),
  layout: false,
  viewExt: 'ejs',
  cache: false,
  debug: true
})

let router = new Router()

// router.use(/)