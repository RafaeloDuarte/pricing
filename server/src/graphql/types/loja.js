const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
} = graphql

const LojaType = new GraphQLObjectType({
    name: 'Loja',
    fields: () => ({
        _id: { type: GraphQLID },
        cod_loja: { type: GraphQLString },
        nome_loja: { type: GraphQLString },
        apelido: { type: GraphQLString },
        razao_social: { type: GraphQLString },
        cnpj_loja: { type: GraphQLString },
        ie_loja: { type: GraphQLString },
        endereco_loja: { type: GraphQLString },
        bairro_loja: { type: GraphQLString },
        cep_loja: { type: GraphQLString },
        cidade_loja: { type: GraphQLString },
        uf_loja: { type: GraphQLString },
        telefone_loja: { type: GraphQLString },
    })
})

module.exports = LojaType