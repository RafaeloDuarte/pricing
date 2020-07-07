const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PrecoVendaSchema = Schema({
    cod_venda: Number,
    data_preco_venda: String,
    cod_loja: String,
    cod_interno: Number,
    cod_grupo: Number,
    preco_normal: Number,
    preco_venda: Number,
    ct_compra: Number,
    icms_venda: Number,
    pis_venda: Number,
    cofins_venda: Number
}, { timestamps: true })

module.exports = mongoose.model("PrecoVenda", PrecoVendaSchema)