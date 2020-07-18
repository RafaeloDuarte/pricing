const router = require('express').Router()
const departamentos = require('../../../controllers/DepartamentoController')

router.post('/', departamentos)

module.exports = router