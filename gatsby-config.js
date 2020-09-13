module.exports = {
  siteMetadata: {
    title: `Metro Dev`,
    description: `Un pequeño demo`,
    author: `@metrodev.io`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `metro-responsive-demo`,
        short_name: `metro-responsive`,
        start_url: `/`,
        background_color: `#009990`,
        theme_color: `#009990`,
        display: `minimal-ui`,
        icon: `src/images/mtro.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/util/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
