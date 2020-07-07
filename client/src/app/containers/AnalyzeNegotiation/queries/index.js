import { gql } from 'apollo-boost';

export const GET_COMPETITORS = gql`
query ClusterLoja($cod_loja: Int!){
    cluster_por_loja(cod_loja: $cod_loja){
        cod_loja
        cod_conc_1
        cod_conc_2
        cidade_1
        cidade_2
    }
}
`
export const GET_CLUSTERS_BY_CITY = gql`
    query ClusterCidade($nome_cluster: String!){
        cluster_por_cidade(nome_cluster:$nome_cluster){
            nome_loja
            bandeira_1
            bandeira_2
        }
    }
`
export const GET_CLUSTERS_CITIES = gql`
    query{
        clusters{
            nome_cluster
        }
    }
`
export const GET_STORES_BY_CLUSTERS_CITY = gql`
    query LojaCidade($cidade_loja: String!){
        lojas_por_cidade(cidade_loja:$cidade_loja){
            nome_loja
        }
    }
`
export const GET_SECTION = gql`
    query Produtos($descricao_secao: String!) {
            produtos_listados_por_secao(
                descricao_secao: $descricao_secao)
            {
                descricao_produto
                cod_interno
                cod_produto
            }
        }`
export const GET_PRECOS = gql`
query Preco($lista_cod_interno: [Int!]! $cod_loja: String!){
    precovenda_lista_produtos( 
            lista_cod_interno: $lista_cod_interno 
            cod_loja: $cod_loja
        ){
            cod_loja
            cod_interno
            preco_venda
      }
  }
`
export const GET_PRECO_PESQUISA = gql`
query PrecoPesquisa($lista_cod_produto: [Int!]! $cod_loja_concorrente: Int!){
    precopesquisa_cod_produto( 
            lista_cod_produto: $lista_cod_produto 
            cod_loja_concorrente: $cod_loja_concorrente
        ){
            cod_loja_concorrente
            cod_produto
            preco_medio
      }
  }
`