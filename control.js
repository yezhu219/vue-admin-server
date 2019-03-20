const con = require('./db')

module.exports = {
  login: (req, res) => {
    console.log(req.body.username, req.body.password)

  }
}