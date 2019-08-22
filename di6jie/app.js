const http = require('http')
const fs = require('fs')
const url = require('url')
const path = require('path')

http.createServer(function(req, res) {
  // console.log(req.url)
  // console.log(url.parse(req.url))
  let pathname = url.parse(req.url).pathname
  console.log(pathname)
  let html
  try {
    html = fs.readFileSync(path.join('./', pathname))
    res.end(html)
  } catch (error) {
    console.log(error)
  }
}).listen(80)