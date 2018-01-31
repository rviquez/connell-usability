import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h3>Tips para una mejor busqueda: </h3>
    <ul>
      <li>Empezar sencillo</li>
      <li>Tabs de google</li>
      <li>
        <h4>Operadores:</h4>
        <ul>
          <li>" ": frase especifica</li>
          <li>*: comodin</li>
          <li>@: busca en redes sociales</li>
          <li>$: busca precios especificos</li>
          <li>#: hashtags </li>
          <li>-: excluye palabaras</li>
          <li>..: busca en rangos</li>
          <li>OR: combina busquedas</li>
          <li>site: busca en un sitio en especifico</li>
        </ul>
      </li>
    </ul>
  </div>
);
