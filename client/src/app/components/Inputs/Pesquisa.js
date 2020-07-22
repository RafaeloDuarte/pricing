import React from 'react'

const Pesquisa = ({valor, onChange, placeholder, onClick}) => (
    <div className="Pesquisa">
        <input value={valor} onChange={onChange} placeholder={placeholder}/>
        <button>
            <i className="fas fa-search" onClick={onClick}/>
        </button>
    </div>
)

export default Pesquisa