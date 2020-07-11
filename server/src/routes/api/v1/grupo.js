const router = require('express').Router()
const grupos = require('../../../controllers/GrupoController')

router.get('/', grupos)

module.exports = router