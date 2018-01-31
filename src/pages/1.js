import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>Google Search</h1>
    <p>A veces parece que estamos buscando la particula de Higgs</p>
    <iframe src="https://giphy.com/embed/weplDpxtPS1P2"
      width="480" height="270" frameBorder="0" className="giphy-embed"
      allowFullScreen></iframe>
  </div>
);
