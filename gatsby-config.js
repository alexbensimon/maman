const path = require('path');

module.exports = {
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-eslint',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'img',
        path: path.join(__dirname, 'src', 'assets', 'img'),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'UA-158039467-1',
        head: false,
        anonymize: true,
      },
    },
  ],
};
