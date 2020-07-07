import React from 'react';
import Menu from '../../../../components/Menu'

function index(props) {

    const menuOptions = [
        'Dashboard',
        'Fornecedores',
        'Elasticidade',
        'Vendas por Tipo',
        'Performance'
    ]
    return (
        <div>
            <Menu menuOptions={menuOptions} />
        </div>
    );
}

export default index;