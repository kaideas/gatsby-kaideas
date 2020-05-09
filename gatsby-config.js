/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


module.exports = {
  /* Your site config here */
  siteMetadata: require("./site-meta-data.json"),
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/_data`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-prismjs`,
          options: {
            classPrefix: "language-",
            inlineCodeMarker: null,
            aliases: {},
            showLineNumbers: false,
            noInlineHighlight: false,
          },
        },
        {
          resolve: 'gatsby-remark-emojis',
        }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it. replace with yours
        trackingId: "UA-164743872-1",
        head: true,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Delog GatbsyJS Starter`,
        short_name: `Delog`,
        start_url: `/`,
        background_color: `#E3F4FF`,
        theme_color: `#1B5FBC`,
        display: `standalone`,
        icon: "src/images/icon.png",
      },
    },
    `gatsby-plugin-sass`, 
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    // siteURL is a must for sitemap generation
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    // new FaviconsWebpackPlugin({
    //   logo: './src/logo.png', // svg works too!
    //   mode: 'webapp', // optional can be 'webapp' or 'light' - 'webapp' by default
    //   devMode: 'webapp', // optional can be 'webapp' or 'light' - 'light' by default 
    //   favicons: {
    //     appName: 'my-app',
    //     appDescription: 'Kaideas',
    //     developerName: 'Kai Takahashi',
    //     developerURL: null, // prevent retrieving from the nearest package.json
    //     background: '#ddd',
    //     theme_color: '#333',
    //     icons: {
    //       coast: false,
    //       yandex: false
    //     }
    //   }
    // })

    // `gatsby-plugin-favicon`,
    
  ],
}
