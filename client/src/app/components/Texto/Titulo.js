import React from 'react'

const Titulo = ({ tipo, titulo }) => {
    switch (tipo) {
        case 'h1':
            return (<h1 className='Titulo'>{titulo}</h1>)
        case 'h2':
            return (<h2 className='Titulo'>{titulo}</h2>)
        case 'h4':
            return (<h4 className='Titulo'>{titulo}</h4>)
        case 'h3':
            return (<h3 className='Titulo'>{titulo}</h3>)
        default:
            return (<h1 className='Titulo'>{titulo}</h1>)
    }
}

export default Titulo