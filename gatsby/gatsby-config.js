const dotenv = require('dotenv');
dotenv.config({ path: '.env' });

module.exports = {
  siteMetadata: {
    title: `My Technologist`,
    description: `Leaders in Career Coaching and Recruitment for Big Tech.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `f9me0pd4`,
        dataset: `production`,
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
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
        name: `My Technologist`,
        short_name: `My Technologist`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/mytechnologists-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    `gatsby-plugin-optimize-svgs`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: {
          sm: '(max-width: 575px)',
          md: '(max-width: 767px)',
          l: '(max-width: 991px)',
          xl: '(max-width: 1199px)',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-FXQPGV0TRM', // Google Analytics / GA
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
