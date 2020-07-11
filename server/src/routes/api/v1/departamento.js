const router = require('express').Router()
const departamentos = require('../../../controllers/DepartamentoController')

router.get('/', departamentos)

module.exports = router