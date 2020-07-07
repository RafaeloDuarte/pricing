import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import ProductSelect from './ProductSelect'
import Select from '../../../../../components/Select'

const GET_SECTION = gql`
    query ProdutosSection($descricao_departamento: String!) {
        produtos_listados_por_departamento(
            descricao_departamento:$descricao_departamento)
            {
                descricao_secao
            }
        }`;

function selectFormat(list) {
    const intermedialList = list.map(section => section.descricao_secao)
    const intermedialList2 = [...new Set(intermedialList)]
    return intermedialList2.map(section => { return { label: section, value: section } })
}

function addSectionAction({ section }) {
    return { type: 'TOGGLE_SECTION', productType: section }
}

export default function SectionSelect({ departamentState }) {
    const dispatch = useDispatch();
    const toggleSection = (e) => {
        setProductTypeState(e.value)
        addSection(e.value)
    }
    function addSection(value) {
        dispatch(addSectionAction({
            section: value,
        }))
    }
    const [productTypeState, setProductTypeState] = useState('')
    const descricao_departamento = departamentState
    const { loading, error, data } = useQuery(GET_SECTION, {
        variables: { descricao_departamento },
    });

    if (loading) return null;
    if (error) return `Error! ${error}`;
    const list = data.produtos_listados_por_departamento

    return (
        <>
            <Select
                value={productTypeState}
                firstEl='Seção'
                list={selectFormat(list)}
                toggle={toggleSection} />
            <ProductSelect sectionState={productTypeState} />
        </>
    )
}