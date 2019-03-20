const mysql = require('mysql')
//连接数据库
const conn = mysql.createConnection({
  host: '127.0.0.11',
  user: 'root',
  password: 'root',
  database: 'alibaixiu'

})

module.exports = conn