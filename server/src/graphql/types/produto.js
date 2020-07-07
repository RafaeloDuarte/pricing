const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt
} = graphql

const ProdutoType = new GraphQLObjectType({
    name: 'Produto',
    fields: () => ({
        _id: { type: GraphQLID },
        descricao_departamento: { type: GraphQLString },
        descricao_secao: { type: GraphQLString },
        cod_interno: { type: GraphQLInt },
        descricao_produto: { type: GraphQLString },
        cod_produto: { type: GraphQLInt }
    })
})

module.exports = ProdutoType