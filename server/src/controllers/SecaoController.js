const { Pool } = require('pg')
const pool = new Pool(require('../config/pgBatabase'))
const queries = require('../database/queries')
const secaoErrorHandler = e => {return {err: e}}

const secoes = (req, resp, next) => {
    var section = req.query.section ? req.query.section : null
    var sql = `SELECT bigbox.filter_options_secoes(${section})`;
    pool.query(sql)
        .then(res => resp.json(res.rows))
        .catch(e => resp.json(secaoErrorHandler(e)))
}

module.exports = secoes