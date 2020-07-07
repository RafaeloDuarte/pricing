const graphql = require('graphql');
const {
    GraphQLInt,
    GraphQLList
} = graphql

const PrecoPesquisaType = require('../types/precoPesquisa')
const PrecoPesquisa = require('../../model/precoPesquisa')

const precoPesquisa = {
    precopesquisa_cod_produto: {
        type: new GraphQLList(PrecoPesquisaType),
        args: {
            lista_cod_produto: { type: new GraphQLList(GraphQLInt) },
            cod_loja_concorrente: { type: GraphQLInt }
        },
        resolve(parent, args) {
            return PrecoPesquisa.find({
                cod_produto: { $in: args.lista_cod_produto },
                cod_loja_concorrente: args.cod_loja_concorrente
            })
        }
    }
}

module.exports = precoPesquisa