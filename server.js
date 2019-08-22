const http = require('http')
const split = require('./split')

http.createServer(function(req, res) {
  let boundary = '--' + req.headers['content-type'].split('; ')[1].split('=')[1]
  console.log(boundary)
  let arr = []
  req.on('data', buffer => {
    arr.push(buffer)
  })

  req.on('end', () => {
    let buffer = Buffer.concat(arr)
    let arr2 = split(buffer, boundary)
    console.log(arr2)
    arr2.pop()
    arr2.shift()

    arr2.forEach(buffer => {
      buffer = buffer.slice(2, buffer.length - 2)
      console.log(buffer.toString())
    })
  })
}).listen(8080)