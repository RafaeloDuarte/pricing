const router = require('express').Router()
const lojas = require('../../../controllers/LojaController')

router.get('/', lojas)

module.exports = router