const router = require('express').Router()
const secoes = require('../../../controllers/SecaoController')

router.get('/', secoes)

module.exports = router