import React from 'react';
import { Link } from 'react-router-dom';
import './main.css'

const TabelaSimples = ({ cabecalho, dados }) => (
    <div className="TabelaSimples">
        <table className="simples">
            <thead>
                <tr>
                    { cabecalho.map((item, idx) => (<th key={idx}>{item}&nbsp;&nbsp;</th>)) }
                </tr>
            </thead>
            <tbody>
                {
                    dados.map((linha, idx) => (
                        <tr key={idx}>
                            {
                                cabecalho.map((item, index) => (
                                    
                                    <td key={index}>{ item === 'R$ Novo Preço Sistema' ? <input type="number" placeholder={linha[item] || ""}></input> : linha[item]}</td>
                                ))
                            }
                            { 
                                linha["botaoDetalhes"] && (
                                    <td>
                                        <Link to={linha["botaoDetalhes"]}>
                                            <button className="button button-danger button-small">
                                                DETALHES
                                            </button>
                                        </Link>
                                    </td>
                                ) 
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
)

export default TabelaSimples;