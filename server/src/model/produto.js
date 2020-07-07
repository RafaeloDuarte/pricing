const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProdutoSchema = Schema({
    cod_interno: Number,
    cod_departamento: String,
    descricao_departamento: String,
    cod_secao: Number,
    descricao_secao: String,
    cod_grupo: String,
    descricao_grupo: String,
    cod_produto: Number,
    descricao_produto: String,
    cassificacao_mercadologica: String,
    ean: String,
    cod_embalagem: String,
    data_cadastro: String,
    cod_est: Number,
    margem: Number,
    funcao: String,
    bloq_loja_1: String,
    bloq_loja_4: String,
    bloq_loja_5: String,
    bloq_loja_6: String,
    bloq_loja_7: String,
    bloq_loja_8: String,
    bloq_loja_9: String,
    icms: String,
    pis: String,
    cofins: String
}, { timestamps: true })

module.exports = mongoose.model("Produto", ProdutoSchema)