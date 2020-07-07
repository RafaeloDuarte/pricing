const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClusterSchema = Schema({
    nome_loja: String,
    cod_loja: Number,
    nome_cluster: String,
    cod_cluster: Number,
    cod_conc_1: Number,
    nome_conc_1: String,
    tipo_conc_1: String,
    bandeira_1: String,
    tipo_logradouro_1: String,
    logradouro_1: String,
    numero_1: Number,
    bairro_1: String,
    cidade_1: String,
    uf_1: String,
    cod_conc_2: String,
    nome_conc_2: String,
    tipo_conc_2: String,
    bandeira_2: String,
    tipo_logradouro_2: String,
    logradouro_2: String,
    numero_2: Number,
    bairro_2: String,
    cidade_2: String,
    uf_2: String
}, { timestamps: true })

module.exports = mongoose.model("Cluster", ClusterSchema)