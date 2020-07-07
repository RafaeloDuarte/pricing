import React from 'react';
import Menu from '../../../../components/Menu'
function index(props) {

    const menuOptions = [
        'Fornecedores',
        'Painel de Mercado',
        'Custos x Preços',
        'Variações de Preço'
    ]

    return (
        <div>
            <Menu menuOptions={menuOptions} />
        </div>
    );
}

export default index;