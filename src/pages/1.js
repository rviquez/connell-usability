import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h1>Google Search</h1>
    <p>A veces parece que estamos buscando la particula de Higgs</p>
    <img src="https://media.giphy.com/media/weplDpxtPS1P2/giphy.gif" alt=""/>
    <iframe src="https://giphy.com/embed/weplDpxtPS1P2"
      width="480" height="270" frameBorder="0" className="giphy-embed"
      allowFullScreen></iframe>
      <p><a href="https://giphy.com/gifs/nowthisnews-the-simpsons-higgs-boson-god-particle-weplDpxtPS1P2">via GIPHY</a></p>
  </div>
);
