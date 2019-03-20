const express = require('express')
const router = express.Router()

const ctr = require('./control')

router.post('/login', ctr.login)


module.exports = router