const express = require('express')
const router = express.Router()

const ctr = require('./control')

router.get('/', ctr.index)


module.exports = router