const express = require('express')
const app = express()


//导入cors共享
const cors = require('cors')
app.use(cors())
//导入body-parser 中间件
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({
  extended: false
}))

const router = require('./router')
app.use(router)
app.listen(5000, '127.0.0.11', () => console.log('server is running at http://127.0.0.11:5000'))