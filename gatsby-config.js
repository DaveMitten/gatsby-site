/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  //site 
  siteMetadata: { title: 'test dick blog' },
  // plugins added here, this plugin, sass is ato allow for use of sass in the project
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'files',
        path: `${__dirname}/src/pages`
      }
    }
  ]
};
