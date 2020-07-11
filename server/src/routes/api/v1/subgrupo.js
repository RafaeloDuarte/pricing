const router = require('express').Router()
const subgrupos = require('../../../controllers/SubgrupoController')

router.get('/', subgrupos)

module.exports = router