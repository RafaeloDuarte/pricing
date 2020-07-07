const router = require('express').Router()
const clusters = require('../../../controllers/ClusterController')

router.get('/', clusters)

module.exports = router