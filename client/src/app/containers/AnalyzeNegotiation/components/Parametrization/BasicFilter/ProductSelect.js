import React, { useState } from 'react'
import Select from '../../../../../components/Select'
import { useDispatch } from 'react-redux'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_SECTION = gql`
    query Produtos($descricao_secao: String!) {
            produtos_listados_por_secao(
                descricao_secao: $descricao_secao)
            {
                descricao_produto
            }
        }`;

function selectFormat(list) {
    const intermedialList = list.map(section => section.descricao_produto)
    const intermedialList2 = [...new Set(intermedialList)]
    return intermedialList2.map(section => { return { label: section, value: section } })
}

function addProdAction({ product }) {
    return { type: 'TOGGLE_PRODUCT', product }
}

export default function ProductSelect({ sectionState }) {
    const dispatch = useDispatch()
    const toggleProd = (e) => {
        setProduct(e.value)
        addProd(e.value)
    }
    function addProd(value) {
        dispatch(addProdAction({
            product: value
        }))
    }

    const descricao_secao = sectionState
    const [product, setProduct] = useState('')
    const { loading, error, data } = useQuery(GET_SECTION, {
        variables: { descricao_secao },
    });

    if (loading) return null;
    if (error) return `Error! ${error}`;
    const list = data.produtos_listados_por_secao
    return (
        <>
            <Select
                value={product}
                firstEl='Produto'
                list={selectFormat(list)}
                toggle={toggleProd} />
        </>
    )
}