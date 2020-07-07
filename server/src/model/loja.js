const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema

const LojaSchema = Schema({
    cod_loja: String,
    nome_loja: String,
    apelido: String,
    razao_social: String,
    cnpj_loja: Number,
    ie_loja: Number,
    endereco_loja: String,
    bairro_loja: String,
    cep_loja: Number,
    cidade_loja: { type: String, uniqueCaseInsensitive: true },
    uf_loja: String,
    telefone_loja: Number
}, { timestamps: true })

LojaSchema.plugin(uniqueValidator, {
    message: 'Error, expected {PATH} to be unique.'
});

module.exports = mongoose.model("Loja", LojaSchema)