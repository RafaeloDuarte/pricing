const router = require('express').Router()
const lojas = require('../../../controllers/LojaController')

router.post('/', lojas)

module.exports = router