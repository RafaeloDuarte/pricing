import React, { useState } from 'react';
import Select from '../../../../../components/Select'

export default function PriceIndex() {

    const [categories, setCategories] = useState([{ value: 'bandeira', label: 'Bandeira' }])
    const [sensibilities, setSensibilities] = useState([{ value: 'loja', label: 'Loja' }])
    const [providers, setProviders] = useState([{ value: 'tipo-concorrente', label: 'Tipo Concorrente' }])

    const [category, setCategory] = useState('')
    const [sensibility, setSensibility] = useState('')
    const [provider, setProvider] = useState('')

    const toggleCategory = (e) => {
        setCategory(e.value)
    }

    const toggleSensibility = (e) => {
        setSensibility(e.value)
    }

    const toggleProvider = (e) => {
        setProvider(e.value)
    }

    return (
        <>
            <div>
                <Select
                    value={category}
                    firstEl='Papel Categoria'
                    list={categories}
                    toggle={toggleCategory} />
                <Select
                    value={sensibility}
                    firstEl='Sensibilidade'
                    list={sensibilities}
                    toggle={toggleSensibility} />
                <Select
                    value={provider}
                    firstEl='Fornecedor'
                    list={providers}
                    toggle={toggleProvider} />
            </div>
        </>
    );
}
