const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql

const Produto = require('../../model/produto')
const ProdutoType = require('../types/produto')

const produtoQueries = {
    produto: {
        type: ProdutoType,
        args: { _id: { type: GraphQLID } },
        resolve(parent, args) {
            return Produto.findById(args._id)
        }
    },
    produtos: {
        type: new GraphQLList(ProdutoType),
        resolve(parent, args) {
            return Produto.find({})
        }
    },
    produtos_listados_por_departamento: {
        type: new GraphQLList(ProdutoType),
        args: { descricao_departamento: { type: GraphQLString } },
        resolve(parent, args) {
            return Produto.find(
                { descricao_departamento: args.descricao_departamento }
            )
        }
    },
    produtos_listados_por_secao: {
        type: new GraphQLList(ProdutoType),
        args: { descricao_secao: { type: GraphQLString } },
        resolve(parent, args) {
            return Produto.find(
                { descricao_secao: args.descricao_secao }
            )
        }
    },
    produto_cod_interno: {
        type: new GraphQLList(ProdutoType),
        args: { cod_interno: { type: GraphQLInt } },
        resolve(parent, args) {
            return Produto.find({ cod_interno: args.cod_interno })
        }
    },
    produtos_por_descricao: {
        type: new GraphQLList(ProdutoType),
        args: { descricao_secao: { type: GraphQLString } },
        resolve(parent, args) {
            return Produto.find({ descricao_secao: args.descricao_secao })
        }
    }
}

module.exports = produtoQueries