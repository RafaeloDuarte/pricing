import React from 'react';
import Menu from '../../../../components/Menu'
function index(props) {

    const menuOptions = [
        'Análise por Status',
        'Evolução das Rupturas',
        'Demonstrativo Rupturas',
        'Maiores Rupturas',
        'OSA'
    ]

    return (
        <div>
            <Menu menuOptions={menuOptions} />
        </div>
    );
}

export default index;