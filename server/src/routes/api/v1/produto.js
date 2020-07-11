const router = require('express').Router()
const produtos = require('../../../controllers/ProdutoController')

router.get('/', produtos)

module.exports = router