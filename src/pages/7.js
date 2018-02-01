import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h2>Mas utilizadas</h2>
    <table>
      <thead>
        <tr>
          <th>Formula</th>
          <th>Ejemplo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sumatoria</td>
          <td>SUM(A1:A10)</td>
        </tr>
        <tr>
          <td>Contar Cantidad de celdas con numeros</td>
          <td>Count(A1:A10)/</td>
        </tr>
        <tr>
          <td>Contar Cantidad de celdas con letras</td>
          <td>Counta(A1:A10)</td>
        </tr>
        <tr>
          <td>Promedio</td>
          <td>Average(A1:A10)</td>
        </tr>
        <tr>
          <td>Redondear</td>
          <td>ROUND(A1,1)</td>
        </tr>
        <tr>
          <td>Maximo valor</td>
          <td>MAX(A1,1)</td>
        </tr>
        <tr>
          <td>Minimo valor</td>
          <td>MIN(A1,1)</td>
        </tr>
        <tr>
          <td>Mayusculas</td>
          <td>UPPER(A1)</td>
        </tr>
        <tr>
          <td>Minusculas</td>
          <td>LOWER(A1,1)</td>
        </tr>
        <tr>
          <td>Propio</td>
          <td>PROPER(A1)</td>
        </tr>
        <tr>
          <td>Concatenar palabras</td>
          <td>&</td>
        </tr>
      </tbody>
    </table>
  </div>
);
