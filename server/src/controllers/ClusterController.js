const { Pool } = require('pg')
const pool = new Pool(require('../config/pgBatabase'))
const queries = require('../database/queries')
const clusterErrorHandler = e => {return {err: e}}

const clusters = (req, resp, next) => {
    pool.query(queries.clusters)
        .then(res => resp.json(res.rows))
        .catch(e => resp.json(clusterErrorHandler(e)))
}

module.exports = clusters