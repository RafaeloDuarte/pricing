import React from 'react';
import Menu from '../../../../components/Menu'

function index(props) {

    const menuOptions = ['Pesquisa Detalhada', 'Pesquisa Preços Promocionais']

    return (
        <div>
            <Menu menuOptions={menuOptions} />
        </div>
    );
}

export default index;