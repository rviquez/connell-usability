import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <iframe src="https://giphy.com/embed/3o7qDSOvfaCO9b3MlO" width="480" height="342"
    frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
    <h1>Gracias</h1>
  </div>
);
