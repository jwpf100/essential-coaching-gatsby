module.exports = {
  siteMetadata: {
    title: `Essential Coaching`,
    description: `Essential Coaching - Great Careers Start Here!`,
    author: `joseph.fletcher100@gmail.com`,
    siteUrl: `https://essentialcoaching.co.uk/`,
    keywords: [
      'Career Coaching',
      'Life Coaching',
      'Career Advice',
      'Career Guidance',
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Essential Coaching`,
        short_name: `Essential Coaching`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo/trans-logo.png`, // This path is relative to the root of the site.
      },
    },
    // `gatsby-plugin-offline`,
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://essentialcoaching.us17.list-manage.com/subscribe/post?u=3065fd3ec7c12f77f82258743&amp;id=541829f297',
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'UA-177419735-1', // Google Analytics / GA
          // optional
          // 'OPTIONAL----AW-CONVERSION_ID', // Google Ads / Adwords / AW
          // 'OPTIONAL----DC-FLOODIGHT_ID', // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          // respectDNT: false,
          // Avoids sending pageview hits from custom paths
          // exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
