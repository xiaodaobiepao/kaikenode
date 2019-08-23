const mysql = require('mysql')
const co = require('co')

let conn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: '20181101'
})

module.exports = co(conn)