import React from 'react'

const InputSelect = ({name, value, opcoes, onChange}) => (
    <div>
        <select value={value} name={name} onChange={onChange}>
            {
                opcoes.map((opcao, idx) => {
                    return (
                        <option key={opcao.value} value={opcao.value}>{opcao.label}</option>
                    )
                })
            }
        </select>
    </div>
)

export default InputSelect