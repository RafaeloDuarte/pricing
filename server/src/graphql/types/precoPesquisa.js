const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat,
} = graphql

const PrecoPesquisaType = new GraphQLObjectType({
    name: 'PrecoPesquisa',
    fields: () => ({
        _id: { type: GraphQLID },
        cod_produto: { type: GraphQLInt },
        descricao_produto: { type: GraphQLString },
        cod_loja_concorrente: { type: GraphQLInt },
        preco_medio: { type: GraphQLFloat },
        data: { type: GraphQLString }
    })
})

module.exports = PrecoPesquisaType