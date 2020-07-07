const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLInt,
    GraphQLList,
} = graphql

const PrecoVendaType = require('../types/precoVenda')
const PrecoVenda = require('../../model/precoVenda')

const precoVendaQueries = {
    precovendas_loja: {
        type: new GraphQLList(PrecoVendaType),
        args: {
            cod_loja: { type: GraphQLString },
            cod_interno: { type: GraphQLString },
        },
        resolve(parent, args) {
            return PrecoVenda.find({ cod_loja: args.cod_loja })
        }
    },
    precovenda: {
        type: new GraphQLList(PrecoVendaType),
        args: { cod_interno: { type: GraphQLInt } },
        resolve(parent, args) {
            return PrecoVenda.find({ cod_interno: args.cod_interno })
        }
    },
    precovenda_lista_produtos: {
        type: new GraphQLList(PrecoVendaType),
        args: {
            lista_cod_interno: { type: new GraphQLList(GraphQLInt) },
            cod_loja: { type: GraphQLString },
            data_preco_venda: { type: new GraphQLList(GraphQLString) }
        },
        resolve(parent, args) {
            return PrecoVenda.find({
                cod_interno: { $in: args.lista_cod_interno },
                cod_loja: args.cod_loja,
                data_preco_venda: { $in: args.data_preco_venda }
            })
        }
    },
    precovenda_cod_interno: {
        type: new GraphQLList(PrecoVendaType),
        args: {
            cod_interno: { type: GraphQLInt },
            cod_loja: { type: GraphQLString }
        },
        resolve(parent, args) {
            return PrecoVenda.find({
                cod_interno: args.cod_interno,
                cod_loja: args.cod_loja
            })
        }
    },
    precovenda_cod_loja: {
        type: new GraphQLList(PrecoVendaType),
        args: { cod_loja: { type: GraphQLString } },
        resolve(parent, args) {
            return PrecoVenda.find({
                cod_loja: args.cod_loja
            })
        }
    }

}

module.exports = precoVendaQueries