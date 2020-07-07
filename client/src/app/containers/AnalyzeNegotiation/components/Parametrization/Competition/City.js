import React, { useState, useCallback, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks';

import Cluster from './Cluster'
import Select from '../../../../../components/Select'
import { GET_CLUSTERS_CITIES } from '../../../queries'
import { selectFormat } from '../../../../../utils'
import './main.css'

export default function City() {
    const cod_loja = 4
    const [city, setCity] = useState('')

    //Get cidades
    const { loading, error, data } = useQuery(GET_CLUSTERS_CITIES);
    if (loading) return null;
    if (error) return `Error! ${error}`;

    const city1 = data.clusters.map(cluster => cluster.nome_cluster)
    const cities = [...new Set(city1)]

    const toggleCity = (e) => {
        setCity(e.value)
    }

    return (
        <>
            <Select
                value={city}
                firstEl='Cidade'
                list={selectFormat(cities)}
                toggle={toggleCity} />
            <Cluster nome_cluster={city}/>
        </>
    )
}