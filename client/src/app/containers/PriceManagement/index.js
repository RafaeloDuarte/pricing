import React from 'react'

import Menu from '../../components/Menu'
import TabelaSimples from '../../components/Tabela/TabelaSimples'
import Filter from './components/Filter'
import Scenarios from './components/Scenarios'

import 'react-infinite-calendar/styles.css'
import './index.css'

function PriceManagement() {

    return (
        <>
            <Menu menuOptions={['']} />
            <div className='PriceManagement'>
                <Filter/>
                <Scenarios/>
                <div id='tables'>
                    <TabelaSimples cabecalho={['Cluster', 'Código Pai', 'Descrição Item', 'Cod Itens Associados', 'Preço Reg R$ Atual', 'R$ Novo Preço Sistema', 'R$ Custo', '% Margem Objetiva', '% Margem Atual', '% Nova Margem', 'Var% Novo Preço vs Atual', 'Depto']} dados={[]} />
                </div>
            </div>
        </>
    )
}

export default PriceManagement