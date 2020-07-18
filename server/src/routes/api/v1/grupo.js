const router = require('express').Router()
const grupos = require('../../../controllers/GrupoController')

router.post('/', grupos)

module.exports = router