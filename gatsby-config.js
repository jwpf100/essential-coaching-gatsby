module.exports = {
  siteMetadata: {
    title: `Essential Coaching`,
    description: `Essential Coaching - Great Careers Start Here!`,
    author: `joseph.fletcher100@gmail.com`,
    siteUrl: `https://dev.jwpf100-test-domain.com/`,
    keywords: ['Career Coaching', 'Life Coaching', 'Career Advice', 'Career Guidance']
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images`,
      },
      __key: "images",
    },
    {resolve: 'gatsby-plugin-mailchimp',
  options: {
    endpoint: 'https://essentialcoaching.us17.list-manage.com/subscribe/post?u=3065fd3ec7c12f77f82258743&amp;id=541829f297'
  }
}
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
