import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Select from '../../../../components/Select'
import uri from '../../../../config/apiClient'

import './style.css'

function Filter(props) {

    const [clusters, setClusters] = useState(['Clusters'])

    useEffect(()=>{
        axios.get(uri)
            .then(res => {
                setClusters(res.data.map(d => d.descricao))
                console.log(clusters)
            })
    },[clusters])

    return (
        <div id='filter'>
            <h1>Filtrar</h1>
            <Select value='Cluster' list={clusters} firstEl='Cluster'/>
            <Select value='loja' list={['loja']} firstEl='loja'/>
            <Select value='departamento' list={['departamento']} firstEl='departamento'/>
            <Select value='seção' list={['seção']} firstEl='seção'/>
            <Select value='grupo' list={['grupo']} firstEl='grupo'/>
            <Select value='subgrupo' list={['subgrupo']} firstEl='subgrupo'/>
            <Select value='categoria' list={['categoria']} firstEl='categoria'/>
        </div>
    );
}

export default Filter;