const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLFloat,
    GraphQLNonNull
} = graphql

const Cluster = require('../../model/cluster')
const ClusterType = require('../types/cluster')

const clusterQueries = {
    cluster: {
        type: ClusterType,
        args: { _id: { type: GraphQLID } },
        resolve(parent, args) {
            return Cluster.findById(args.id)
        }
    },
    clusters: {
        type: new GraphQLList(ClusterType),
        resolve(parent, args) {
            return Cluster.find({})
        }
    },
    cluster_por_loja: {
        type: ClusterType,
        args: { cod_loja: { type: GraphQLInt } },
        resolve(parent, args) {
            return Cluster.findOne({ cod_loja: args.cod_loja })
        }
    },
    cluster_por_cidade: {
        type: new GraphQLList(ClusterType),
        args: { nome_cluster: { type: GraphQLString } },
        resolve(parent, args) {
            return Cluster.find({ nome_cluster: args.nome_cluster })
        }
    }
}

module.exports = clusterQueries