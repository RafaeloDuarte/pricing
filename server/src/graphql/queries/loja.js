const graphql = require('graphql');
const {
    GraphQLString,
    GraphQLList
} = graphql

const Loja = require('../../model/loja')
const LojaType = require('../types/loja')

const lojasQueries = {
    lojas_por_cidade: {
        type: new GraphQLList(LojaType),
        args: { cidade_loja: { type: GraphQLString } },
        resolve(parent, args) {
            return Loja.find({ cidade_loja: args.cidade_loja })
        }
    }
}

module.exports = lojasQueries
