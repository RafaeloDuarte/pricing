const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
} = graphql

const ClusterType = new GraphQLObjectType({
    name: 'Cluster',
    fields: () => ({
        _id: { type: GraphQLID },
        nome_cluster: { type: GraphQLString },
        nome_loja: { type: GraphQLString },
        cod_loja: { type: GraphQLInt },
        cod_conc_1: { type: GraphQLInt },
        cod_conc_2: { type: GraphQLInt },
        cidade_1: { type: GraphQLString },
        cidade_2: { type: GraphQLString },
        bandeira_1: { type: GraphQLString },
        bandeira_2: { type: GraphQLString }
    })
})

module.exports = ClusterType