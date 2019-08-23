const Router = require('koa-router')
const admin = require('./admin')

let router = new Router()
router.use('/admin', admin)
router.use('/company', require('./company'))

module.exports = router.routes()