import React, { useState } from 'react';
import './style.css'

function Scenarios() {

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
            <div id='header'>
                <h2>Simulador de Cenários</h2>
            </div>
            <div id='params'>
                <div>
                    <form>
                        <h3>Visualizar</h3>
                        <input onClick={() => toggleMain()} type='radio' htmlFor='prin' value={view} defaultChecked={mainItens}></input>
                        <label id='prin'>Itens principais</label><br /><br />
                        <input onClick={() => toggleAll()} type='radio' htmlFor='all' value={view} defaultChecked={allItens}></input>
                        <label id='all'>Todos os itens</label>
                    </form>
                </div>
                <div>
                    <form>
                        <h3>Exportar</h3>
                        <input onClick={() => toggleMain()} type='radio' htmlFor='prin' value={view} defaultChecked={mainItens}></input>
                        <label id='prin'>Todos os Itens</label><br /><br />
                        <input onClick={() => toggleAll()} type='radio' htmlFor='all' value={view} defaultChecked={allItens}></input>
                        <label id='all'>Somente Alterações</label>
                    </form>
                </div>
                <div id='buttons'>
                    <div id='save'>
                        <button>
                            Salvar
                        </button>
                        <button>
                            Download
                        </button>
                    </div>
                    <div id='clear'>
                        <button>
                            Limpar Sugestão
                    </button>
                        <button>
                            Desfazer Alterações
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Scenarios;