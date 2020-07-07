const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLSchema,
} = graphql

const {
    cluster,
    clusters,
    cluster_por_cidade,
    cluster_por_loja
} = require('../queries/cluster')
const {
    precovendas_loja,
    precovenda,
    precovenda_lista_produtos,
    precovenda_cod_interno,
    precovenda_cod_loja
} = require('../queries/precoVenda')
const {
    produto,
    produtos,
    produtos_listados_por_departamento,
    produtos_listados_por_secao,
    produto_cod_interno,
    produtos_por_descricao
} = require('../queries/produto')
const { lojas_por_cidade } = require('../queries/loja')
const { precopesquisa_cod_produto } = require('../queries/precoPesquisa')

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        cluster,
        clusters,
        cluster_por_cidade,
        cluster_por_loja,
        precovendas_loja,
        precovenda,
        precovenda_lista_produtos,
        precovenda_cod_interno,
        precovenda_cod_loja,
        produto,
        produtos,
        produtos_listados_por_departamento,
        produtos_listados_por_secao,
        produto_cod_interno,
        produtos_por_descricao,
        lojas_por_cidade,
        precopesquisa_cod_produto
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})