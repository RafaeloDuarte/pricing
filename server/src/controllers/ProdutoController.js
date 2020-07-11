const { Pool } = require('pg')
const pool = new Pool(require('../config/pgBatabase'))
const queries = require('../database/queries')
const categoryErrorHandler = e => {return {err: e}}

const produtos = (req, resp, next) => {
    var category = req.query.category ? req.query.category : null
    var sql = `SELECT bigbox.filter_options_itens(${category})`;
    pool.query(sql)
        .then(res => resp.json(res.rows))
        .catch(e => resp.json(categoryErrorHandler(e)))
}

module.exports = produtos