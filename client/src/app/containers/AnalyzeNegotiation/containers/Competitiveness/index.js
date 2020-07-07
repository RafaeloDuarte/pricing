import React from 'react'
import { useSelector } from 'react-redux'
import { useQuery } from '@apollo/react-hooks';

import Chart from '../../../../components/Charts/Barchart'
import Table from '../../components/Table/index'
import Menu from '../../../../components/Menu'
import Parametrization from '../../components/Parametrization/index'
import Date from '../../../../components/Date'
import { data } from '../../../../config/mocks'
import { 
    GET_COMPETITORS, 
    GET_SECTION, 
    GET_PRECOS, 
    GET_PRECO_PESQUISA 
} from '../../queries'

import 'react-infinite-calendar/styles.css'
import '../../style.css'

function AnalyzeNegotiation() {
    
    let cod_loja = 4
    let cod_loja_concorrente = 0
    let lista_cod_produto = []
    let lista_cod_interno = []
    const indices = []

    const { 
        departament, 
        productType, 
        product 
    } = useSelector(state => state)

    const { 
        loading: lProd,
        error: erProd, 
        data: products 
    } = useQuery(
        GET_SECTION, { variables: { descricao_secao: productType } }
    );

    const { 
        loading: lC, 
        error: erC, 
        data: competitors 
    } = useQuery(GET_COMPETITORS, { variables: { cod_loja } });

    if (products) {
        lista_cod_interno = 
            products.produtos_listados_por_secao.map(
                prod => prod.cod_interno
            )
    }

    cod_loja = "004"
    const { 
        loading: loadingP, 
        error: errorP, 
        data: precos 
    } = useQuery(GET_PRECOS, {
        variables: { lista_cod_interno, cod_loja },
    });

    if (products) {
        lista_cod_produto = 
            products.produtos_listados_por_secao.map(
                prod => prod.cod_produto
            )
    }
    if (competitors) {
        cod_loja_concorrente = 
            competitors.cluster_por_loja.cod_conc_1
    }

    const { 
        loading: loadingPP, 
        errorPP: errorPP, 
        data: precosPesquisa 
    } = useQuery(GET_PRECO_PESQUISA, {
        variables: { lista_cod_produto, cod_loja_concorrente },
    });
    if (
        precosPesquisa && precosPesquisa.precopesquisa_cod_produto.length > 1 &&
        products && products.produtos_listados_por_secao.length > 1 &&
        precos && precos.precovenda_lista_produtos.length > 1
    ) {
        products.produtos_listados_por_secao.map(prod => {
            precos.precovenda_lista_produtos.map(preco => {
                if (preco.cod_interno === prod.cod_interno) {
                    precosPesquisa.precopesquisa_cod_produto.map(precoPesquisa => {
                        if (precoPesquisa.cod_produto === prod.cod_produto) {
                            const indice = {
                                title: '',
                                preco: '',
                                precoConcorrente: { precoA: '' }
                            }
                            indice.title = prod.descricao_produto
                            indice.preco = preco.preco_venda
                            indice.precoConcorrente.precoA = precoPesquisa.preco_medio
                            indices.push(indice)
                        }
                    })
                }
            })
        })
    }

    const menuOptions = [
        'Índice de Preços',
        'Análise de Tendências',
        'Promoções',
        'Dispersão de Preços',
        'Quantidade Preços Atacado',
        'Ad Hoc',
    ]

    return (
        <>
            <Menu menuOptions={menuOptions} />
            <Parametrization />
            <Date />
            <div className="charts">
                <Chart priceIndex={indices} />
                <div />
                <Table cabecalho={['Fornecedor', 'Preço SIT', 'Preço Concorrente', 'Índice']} dados={data} />
            </div>

            <h5>{`${departament} > ${productType} > ${product}`}</h5>
        </>
    )
}

export default AnalyzeNegotiation