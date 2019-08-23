const express = require('express')
// const querystring = require('querystring')
const cookieParser = require('cookie-parser')
const multer = require('multer')

const app = express()
app.listen(8080)

app.use(cookieParser('sfafsafafsfdsfasfsid'))

let obj = multer({dest: './static/upload'})
app.use(obj.any())
app.post('/reg', (req, res) => {
  console.log(req.files)
})

// app.use((req, res, next) => {
//   let arr = []
//   req.on('data', buffer => {
//     arr.push(buffer)
//   })
//   req.on('end', () => {
//     let post = querystring(req)
//   })
// })

app.get('/a', (req, res, next) => {
  // res.send('aaa')
  // console.log('asa')
  console.log(req.cookies)
  console.log(req.signedCookies)
  res.cookie('amount', 999, {
    maxAge: 15*86400*1000,
    signed: true
  })
  res.send('aaa')
  // next()
})

app.get('/b', (req, res, next) => {
  console.log(req)
  console.log(req.query)
  console.log('dierge')
  res.send('bbb=>b')
})

app.use(express.static('./static/'))