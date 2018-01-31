import React from 'react';
import Link from 'gatsby-link';

export default ({ transition }) => (
  <div style={transition && transition.style}>
    <img src="https://i.imgur.com/PnbINJ6.gif" alt="Monkey" />
  </div>
);
