const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLFloat
} = graphql

const PrecoVendaType = new GraphQLObjectType({
    name: 'PrecoVenda',
    fields: () => ({
        _id: { type: GraphQLID },
        cod_interno: { type: GraphQLInt },
        cod_loja: { type: GraphQLString },
        data_preco_venda: { type: GraphQLString },
        preco_venda: { type: GraphQLFloat }
    })
})

module.exports = PrecoVendaType