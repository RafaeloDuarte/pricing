import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios'
import Select from '../../../../components/Select'
import uri from '../../../../config/apiClient'

import './style.css'

function Filter(props) {

    const [clusters, setClusters] = useState([])
    const [stores, setStores] = useState([])
    const [departaments, setDepartaments] = useState([])
    const [sections, setSections] = useState([])
    const [groups, setGroups] = useState([])
    const [subgroups, setSubgroups] = useState([])
    const [products, setProducts] = useState([])

    const [cluster, setCluster] = useState('cluster')
    const [store, setStore] = useState('loja')
    const [departament, setDepartament] = useState('Departamento')
    const [section, setSection] = useState('Seção')
    const [group, setGroup] = useState('Grupo')
    const [subgroup, setSubgroup] = useState('Subgrup')
    const [product, setProduct] = useState('Produto')

    function convertPgData(pgdata) {
        if (pgdata) {
            let data = pgdata.split(',')
            data = data.map(
                d => d.replaceAll('{', '')
                    .replaceAll('}', '')
                    .replaceAll('\"', '')
                    .replaceAll('NULL', '')
            )
            return data
        }
    }

    const getOptionsFromAPI = () => {
        axios.get(`${uri}\\cluster`)
            .then(res => {
                setClusters(convertPgData(res.data[0].filter_options_clusters))
            })
            .catch(res => {
                console.log(res)
            })

        axios.get(`${uri}\\loja`)
            .then(res => {
                setStores(convertPgData(res.data[0].filter_options_lojas))
            })
            .catch(res => {
                console.log(res)
            })

        axios.get(`${uri}\\departamento`)
            .then(res => {
                setDepartaments(convertPgData(res.data[0].filter_options_departamentos))
            })
            .catch(res => {
                console.log(res)
            })

        axios.get(`${uri}\\secoes`)
            .then(res => {
                setSections(convertPgData(res.data[0].filter_options_secoes))
            })
            .catch(res => {
                console.log(res)
            })

        axios.get(`${uri}\\grupo`)
            .then(res => {
                setGroups(convertPgData(res.data[0].filter_options_grupos))
            })
            .catch(res => {
                console.log(res)
            })

        axios.get(`${uri}\\subgrupo`)
            .then(res => {
                setSubgroups(convertPgData(res.data[0].filter_options_subgrupos))
            })
            .catch(res => {
                console.log(res)
            })
    }

    useEffect(() => {
        getOptionsFromAPI()
    }, [])

    function toggleOps(value) {
        axios.get(`${uri}\\loja`, { cluster: value })
            .then(res => {
                setStores(convertPgData(res.data[0].filter_options_lojas))
            })
            .catch(res => {
                console.log(res)
            })
    }

    return (
        <div id='filter'>
            <h1>Filtrar</h1>
            <Select value={cluster}
                list={clusters}
                firstEl='Cluster'
                toggle={e => {
                    toggleOps(e.target.value)
                    setCluster(e.target.value)
                }} />
            <Select value={store}
                list={stores}
                firstEl='Loja'
                toggle={e => {
                    toggleOps()
                    setStore(e.target.value)
                }} />
            <Select value={departament}
                list={departaments}
                firstEl='Departamento'
                toggle={e => {
                    toggleOps()
                    setDepartament(e.target.value)
                }} />
            <Select value={section}
                list={sections}
                firstEl='Seção'
                toggle={e => {
                    toggleOps()
                    setSection(e.target.value)
                }} />
            <Select value={group}
                list={groups}
                firstEl='Grupo'
                toggle={e => {
                    toggleOps()
                    setGroup(e.target.value)
                }} />
            <Select value={subgroup}
                list={subgroups}
                firstEl='Subgrupo'
                toggle={e => {
                    toggleOps()
                    setSubgroup(e.target.value)
                }} />
            <Select value={product}
                list={products}
                firstEl='Produto'
                toggle={e => {
                    toggleOps()
                    setProduct(e.target.value)
                }} />
        </div>
    );
}

export default Filter;