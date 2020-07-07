const router = require('express').Router()

router.use("/usuarios", require("./usuarios"));
router.use("/cluster", require("./cluster"));

module.exports = router