import React, { useState, useCallback, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks';

import Store from './Store'
import Select from '../../../../../components/Select'
import { GET_CLUSTERS_BY_CITY } from '../../../queries'
import { selectFormat } from '../../../../../utils'
import './main.css'
import { useDispatch } from 'react-redux';

function addClusterAction({ cluster }) {
    return { type: 'TOGGLE_CLUSTER', cluster }
}

export default function Cluster({ nome_cluster }) {

    const dispatch = useDispatch()
    const [cluster, setCluster] = useState('')
    const { loading, error, data } = useQuery(GET_CLUSTERS_BY_CITY, { variables: { nome_cluster } });
    if (loading) return null;
    if (error) return `Error! ${error}`;

    const clusterList = data.cluster_por_cidade.map(cluster => cluster.nome_loja)
    const clusters = [...new Set(clusterList)]

    function addCluster(value) {
        dispatch(addClusterAction(
            { cluster: value }
        ))
    }

    const toggleCluster = (e) => {
        setCluster(e.value)
        addCluster(e.value)
    }

    return (
        <>
            <Select
                value={cluster}
                firstEl='Cluster'
                list={selectFormat(clusters)}
                toggle={toggleCluster} />
            <Store cluster={nome_cluster} />
        </>
    )
}