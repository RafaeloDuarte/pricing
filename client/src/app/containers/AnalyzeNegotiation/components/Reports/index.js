import React from 'react';
import Switch from '../../../../components/Switch';

export default function Reports() {
  return (
    <>
      <div className="Reports">
        <div>
          <Switch option="Competitividade" /><br />
          <Switch option="Ad HOC" /><br />
        </div>
        <div style={{marginLeft:'50px'}}>
          <Switch option="Promoção" /><br />
          <Switch option="Quantidade Preço Atacado" /><br />
        </div>
      </div>
    </>
  );
}
