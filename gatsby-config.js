/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-material-ui",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: './static/logo.svg',
        name: `dknr.io`,
        short_name: `dknr.io`,
        start_url: `/`,
        display: `standalone`,
      },
    },
  ]
}
