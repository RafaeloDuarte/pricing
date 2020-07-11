const { Pool } = require('pg')
const pool = new Pool(require('../config/pgBatabase'))
const queries = require('../database/queries')
const departamentoErrorHandler = e => {return {err: e}}

const departamentos = (req, resp, next) => {
    var departament = req.query.departament ? req.query.departament : null
    var sql = `SELECT bigbox.filter_options_departamentos(${departament})`;
    pool.query(sql)
        .then(res => resp.json(res.rows))
        .catch(e => resp.json(departamentoErrorHandler(e)))
}

module.exports = departamentos