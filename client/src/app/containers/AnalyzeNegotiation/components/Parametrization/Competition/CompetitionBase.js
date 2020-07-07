import React, { useState, useEffect } from 'react';
import Select from '../../../../../components/Select'
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';
import { GET_CLUSTERS_BY_CITY } from '../../../queries'
import { selectFormat } from '../../../../../utils'

export default function CompetitionBase() {

    //const [flags, setFlags] = useState([{ value: '', label: '' }])
    const [stores, setStores] = useState([{ value: '', label: '' }])
    const [concurrents, setConcurrents] = useState([{ value: '', label: '' }])

    const [flag, setFlag] = useState('')
    const [store, setStore] = useState('')
    const [concurrent, setConcurrent] = useState('')

    const nome_cluster = useSelector(state => state.cluster)

    const { error, loading, data } = useQuery(GET_CLUSTERS_BY_CITY, { variables: { nome_cluster } })
    if (loading) return null;
    if (error) return `Error! ${error}`;

    const clusterFlagList = data.cluster_por_cidade.map(cluster =>
        [cluster.bandeira_1, cluster.bandeira_2]
    )
    const flags = selectFormat([...new Set(clusterFlagList[0])])

    const toggleFlag = (e) => {
        setFlag(e.value)
    }

    const toggleStore = (e) => {
        setStore(e.value)
    }

    const toggleConcurrent = (e) => {
        setConcurrent(e.value)
    }

    return (
        <div>
            <center><p>-</p></center>
            <Select
                value={flag}
                firstEl='Bandeira'
                list={flags}
                toggle={toggleFlag} />
            <Select
                value={store}
                firstEl='Loja'
                list={stores}
                toggle={toggleStore} />
            <Select
                value={concurrent}
                firstEl='Concorrente'
                list={concurrents}
                toggle={toggleConcurrent} />
        </div>
    );
}
