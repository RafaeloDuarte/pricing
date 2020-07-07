import React, { useState, useCallback, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks';

import Select from '../../../../../components/Select'
import { GET_STORES_BY_CLUSTERS_CITY } from '../../../queries'
import { selectFormat, upperFirstCase } from '../../../../../utils'
import './main.css'

export default function Store({ cluster }) {

    const cidade_loja = upperFirstCase(cluster)

    const [store, setStore] = useState('')
    const { loading, error, data } = useQuery(GET_STORES_BY_CLUSTERS_CITY, { variables: { cidade_loja } });
    if (loading) return null;
    if (error) return `Error! ${error}`;

    const storeList = data.lojas_por_cidade.map(cluster => cluster.nome_loja)
    const stores= [...new Set(storeList)]

    const toggleCluster = (e) => {
        setStore(e.value)
    }

    return (
        <>
            <Select
                value={store}
                firstEl='Loja'
                list={selectFormat(stores)}
                toggle={toggleCluster} />
        </>
    )
}