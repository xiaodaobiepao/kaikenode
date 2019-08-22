const http = require('http')
const multiparty = require('multiparty')

http.createServer(function(req, res) {
  let form = new multiparty.Form({
    uploadDir: './upload'
  })

  form.parse(req)

  form.on('field', (name, value) => {
    console.log('字段：', name, '=', value)
  })
  form.on('file', (name, file) => {
    console.log('文件：', name, file)
  })

  form.on('close', () => {
    console.log('解析完成')
  })
  res.headers['content-type'] = 'text/plain'
  res.end('成功解析')
}).listen(8080)