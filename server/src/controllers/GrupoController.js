const { Pool } = require('pg')
const pool = new Pool(require('../config/pgBatabase'))
const queries = require('../database/queries')
const groupErrorHandler = e => {return {err: e}}

const grupos = (req, resp, next) => {
    var group = req.query.group ? req.query.group : null
    var sql = `SELECT bigbox.filter_options_grupos(${group})`;
    pool.query(sql)
        .then(res => resp.json(res.rows))
        .catch(e => resp.json(groupErrorHandler(e)))
}

module.exports = grupos