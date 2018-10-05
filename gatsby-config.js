module.exports = {
  siteMetadata: {
    title: 'Jackson Cupboard',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto:300,300i,700,700i` // you can also specify font weights and styles
        ]
      }
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `cupboard.adamromines.me`,
        protocol: `http`,
        hostingWPCOM: false,
        verboseOutput: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        display: 'minimal-ui',
        icon: 'src/images/jackson_cupboard.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
