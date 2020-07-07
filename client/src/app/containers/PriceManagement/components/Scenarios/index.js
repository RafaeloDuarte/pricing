import React, { useState } from 'react';
import './style.css'

function Scenarios(props) {

    const [view, setView] = useState('')
    const [mainItens, setMainItens] = useState('')
    const [allItens, setAllItens] = useState('')

    function toggleAll() {
        if (allItens !== 'true') {
            setAllItens('true')
            setMainItens('')
        } else {
            setAllItens('')
        }
    }

    function toggleMain() {
        if (mainItens !== 'true') {
            setMainItens('true')
            setAllItens('')
        } else {
            setMainItens('')
        }
    }

    return (
        <div id='scenarios'>
            <div>
                <h2>Simulador de Cenários</h2>
            </div>
            <div id='params'>
                <div>
                    <form>
                        <h3>Visualizar</h3>
                        <input onClick={() => toggleMain()} type='radio' for='prin' value={view} checked={mainItens}></input>
                        <label id='prin'>Itens principais</label><br /><br />
                        <input onClick={() => toggleAll()} type='radio' for='all' value={view} checked={allItens}></input>
                        <label id='all'>Todos os itens</label>
                    </form>
                </div>
                <div>
                    <form>
                        <h3>Exportar</h3>
                        <input onClick={() => toggleMain()} type='radio' for='prin' value={view} checked={mainItens}></input>
                        <label id='prin'>Todos os Itens</label><br /><br />
                        <input onClick={() => toggleAll()} type='radio' for='all' value={view} checked={allItens}></input>
                        <label id='all'>Somente Alterações</label>
                    </form>
                </div>
                <div id='buttons'>
                    <button>
                        SALVAR
                    </button>
                    <button>
                        DOWNLOAD
                    </button>
                </div>
                <div id='buttons'>
                    <button>
                        LIMPAR SUGESTÃO
                    </button>
                    <button>
                        DESFAZER ALTERAÇÕES
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Scenarios;