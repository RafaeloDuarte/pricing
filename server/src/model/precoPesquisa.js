const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PrecoPesquisaSchema = Schema({
    cnpj_loja_concorrente: String,
    cod_loja_concorrente: Number,
    cod_produto: Number,
    data: String,
    descricao_concorrente: String,
    descricao_produto: String,
    ean: String,
    foto_url: String,
    hora: String,
    praca: String,
    preco: Number,
    preco_atacado: Number,
    preco_medio: Number,
    promocionado: String,
    quantidade_atacado: Number,
    variacao: Number,
}, { timestamps: true })

module.exports = mongoose.model("PrecoPesquisa", PrecoPesquisaSchema)