import React, { useState, useMemo } from 'react';
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

    const [cluster, setCluster] = useState('')
    const [store, setStore] = useState('loja')
    const [departament, setDepartament] = useState('Departamento')
    const [section, setSection] = useState('Seção')
    const [group, setGroup] = useState('Grupo')
    const [subgroup, setSubgroup] = useState('Subgrup')
    const [product, setProduct] = useState('Produto')

    const getOptionsFromAPI = () => {
        console.log('rws')
        axios.get(`${uri}\\cluster`)
            .then(res => {
                setClusters(convertPgData(res.data[0].filter_options_clusters))
            })
            .catch(res => {
                console.log(res)
            })

        axios.post(`${uri}\\loja`)
            .then(res => {
                setStores(convertPgData(res.data[0].filter_options_lojas))
            })
            .catch(res => {
                console.log(res)
            })

        axios.post(`${uri}\\departamento`)
            .then(res => {
                setDepartaments(convertPgData(res.data[0].filter_options_departamentos))
            })
            .catch(res => {
                console.log(res)
            })

        axios.post(`${uri}\\secoes`)
            .then(res => {
                setSections(convertPgData(res.data[0].filter_options_secoes))
            })
            .catch(res => {
                console.log(res)
            })

        axios.post(`${uri}\\grupo`)
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
        setProduct(['A implementar'])
    }

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

    function toggleOps(value, type) {
        switch (type) {
            case 'cluster':
                setStores([])
                axios.post(`${uri}\\loja`, null, { params: { cluster: clusterTreatment(value) } })
                    .then(res => {
                        setStores(convertPgData(res.data[0].filter_options_lojas))
                    })
                    .catch(res => {
                        console.log(res)
                    })
            case 'departamento':
                axios.post(`${uri}\\secoes`, null, { params: { departament: value } })
                    .then(res => {
                        setSections(convertPgData(res.data[0].filter_options_secoes))
                    })
                    .catch(res => {
                        console.log(res)
                    })
            case 'secao':
                axios.post(`${uri}\\grupo`, null, { params: { section: value } })
                    .then(res => {
                        setSections(convertPgData(res.data[0].filter_options_grupos))
                    })
                    .catch(res => {
                        console.log(res)
                    })
            case 'grupo':
                axios.post(`${uri}\\subgrupo`, null, { params: { group: value } })
                    .then(res => {
                        setSections(convertPgData(res.data[0].filter_options_subgrupos))
                    })
                    .catch(res => {
                        console.log(res)
                    })
        }
    }

    function clusterTreatment(value) {
        switch (value) {
            case 'BIGBOX':
                return 1
            case 'ULTRABOX NORTE':
                return 2
            case 'ULTRABOX SUDESTE':
                return 3
            case 'ULTRABOX NOROESTE':
                return 4
        }
    }

    useMemo(getOptionsFromAPI, [])

    console.log('teste')

    return (
        <div id='filter'>
            <h1>Filtrar</h1>
            <Select value={cluster}
                list={clusters}
                firstEl='Cluster'
                toggle={e => {
                    toggleOps(e.target.value, 'cluster')
                    setCluster(e.target.value)
                }} />
            <Select value={store}
                list={stores}
                firstEl='Loja'
                toggle={e => {
                    toggleOps(e.target.value, 'loja')
                    setStore(e.target.value)
                }} />
            <Select value={departament}
                list={departaments}
                firstEl='Departamento'
                toggle={e => {
                    toggleOps(e.target.value, 'departamento')
                    setDepartament(e.target.value)
                }} />
            <Select value={section}
                list={sections}
                firstEl='Seção'
                toggle={e => {
                    toggleOps(e.target.value, 'secao')
                    setSection(e.target.value)
                }} />
            <Select value={group}
                list={groups}
                firstEl='Grupo'
                toggle={e => {
                    toggleOps(e.target.value, 'grupo')
                    setGroup(e.target.value)
                }} />
            <Select value={subgroup}
                list={subgroups}
                firstEl='Subgrupo'
                toggle={e => {
                    toggleOps(e.target.value, 'subgrupo')
                    setSubgroup(e.target.value)
                }} />
            <Select value={product}
                list={products}
                firstEl='Produto'
                toggle={e => {
                    toggleOps(e.target.value, 'a ver')
                    setProduct(e.target.value)
                }} />
        </div>
    );
}

export default Filter;