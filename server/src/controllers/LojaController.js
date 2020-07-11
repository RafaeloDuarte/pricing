const { Pool } = require('pg')
const pool = new Pool(require('../config/pgBatabase'))
const queries = require('../database/queries')
const clusterErrorHandler = e => {return {err: e}}

const lojas = (req, resp, next) => {
    var cluster = req.query.cluster ? req.query.cluster : 1
    var sql = `SELECT bigbox.filter_options_lojas(${null}, ${cluster})`;
    pool.query(sql)
        .then(res => resp.json(res.rows))
        .catch(e => resp.json(clusterErrorHandler(e)))
}

module.exports = lojas