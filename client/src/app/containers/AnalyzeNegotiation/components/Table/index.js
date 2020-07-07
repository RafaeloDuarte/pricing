import React from 'react';
import TabelaSimples from '../../../../components/Tabela/TabelaSimples'

export default function Table({ cabecalho, dados }) {
  return (
    <>
      <div className="Table">
        <TabelaSimples cabecalho={cabecalho} dados={dados} />
      </div>
    </>
  );
}
