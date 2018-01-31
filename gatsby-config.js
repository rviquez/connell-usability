function getDate() {
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(Date.now()).toLocaleString('en-US', options);
}

module.exports = {
  siteMetadata: {
    name: `Roberto Viquez`,
    title: `Office & Google Docs`,
    date: getDate(),
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`
  ],
};
