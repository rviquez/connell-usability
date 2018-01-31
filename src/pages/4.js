import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h2>Utilidades basicas</h2>
      <table>
        <thead>
        <tr>
          <th>Accion</th>
          <th>Atajo</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abrir</td>
            <td>Ctrl+O</td>
          </tr>
          <tr>
            <td>Salvar</td>
            <td>Ctrl+S</td>
          </tr>
          <tr>
            <td>Cortar</td>
            <td>Ctrl+X</td>
          </tr>
          <tr>
            <td>Copiar</td>
            <td>Ctrl+C</td>
          </tr>
          <tr>
            <td>Pegar</td>
            <td>Ctrl+V</td>
          </tr>
          <tr>
            <td>Seleccionar todo</td>
            <td>Ctrl+A</td>
          </tr>
          <tr>
            <td>Deshacer</td>
            <td>Ctrl+Z</td>
          </tr>
          <tr>
            <td>Rehacer</td>
            <td>Ctrl+Y</td>
          </tr>
          <tr>
            <td>Cancelar accion</td>
            <td>ESC</td>
          </tr>
          <tr>
            <td>Negrita</td>
            <td>Ctrl+B</td>
          </tr>
          <tr>
            <td>Italica</td>
            <td>Ctrl+I</td>
          </tr>
          <tr>
            <td>Subrayar</td>
            <td>Ctrl+U</td>
          </tr>
        </tbody>
      </table>
  </div>
);
