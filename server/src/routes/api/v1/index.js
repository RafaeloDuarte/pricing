const router = require('express').Router()

router.use("/usuarios", require("./usuarios"));
router.use("/cluster", require("./cluster"));
router.use("/loja", require("./loja"));
router.use("/departamento", require("./departamento"));
router.use("/secoes", require("./secoes"));
router.use("/grupo", require("./grupo"));
router.use("/subgrupo", require("./subgrupo"));
router.use("/produto", require("./produto"));

module.exports = router