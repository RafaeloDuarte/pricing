const { Pool } = require('pg')
const pool = new Pool(require('../config/pgBatabase'))
const queries = require('../database/queries')
const clusterErrorHandler = e => {return {err: e}}

const clusters = (req, resp, next) => {
    var cluster = req.query.cluster ? req.query.cluster : null
    var sql = `SELECT bigbox.filter_options_clusters(${cluster})`;
    pool.query(sql)
        .then(res => resp.json(res.rows))
        .catch(e => resp.json(clusterErrorHandler(e)))
}

module.exports = clusters