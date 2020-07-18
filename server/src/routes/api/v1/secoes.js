const router = require('express').Router()
const secoes = require('../../../controllers/SecaoController')

router.post('/', secoes)

module.exports = router