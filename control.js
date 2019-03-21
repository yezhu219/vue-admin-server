const con = require('./db')

module.exports = {
  //登录
  login: (req, res) => {
    let sql = `select username, password from user where username=? and password=?`
    con.query(sql, [req.body.username, req.body.password], (err, result) => {
      if (err) return res.send({
        status: 500,
        msg: err.message,
        data: null
      })
      if (result.length != 0) {
        res.send({
          status: 200,
          msg: 'ok',
          data: {
            token: 'zheshiyigeceshi'
          }
        })
      } else {
        res.send({
          status: 401,
          msg: '用户名或密码错误',
          data: null
        })
      }

    })
  }
}