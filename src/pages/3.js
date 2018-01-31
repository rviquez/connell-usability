import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <h2>Office!</h2>
    <iframe src="https://giphy.com/embed/kNfs0KCgbBib6" width="480" height="201" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/kNfs0KCgbBib6">via GIPHY</a></p>
  </div>
);
