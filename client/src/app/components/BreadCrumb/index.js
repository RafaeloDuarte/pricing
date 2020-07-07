import React from 'react';
import { useSelector } from 'react-redux';

export default function BreadCrumb() {
  const { departament, productType, product } = useSelector(state => state)

  return (
    <>
      <br />
      <label>Análise mensal do índice de preço</label>
      <br />
      <label>{departament} > {productType} > {product}</label>
      <br />
    </>
  );
}
