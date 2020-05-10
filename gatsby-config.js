/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */



module.exports = {
  /* Your site config here */
  siteMetadata: require("./site-meta-data.json"),
  // siteMetadata: {
  //   title: "Kai Takahashi - Product Designer",
  //   titleTemplate: "%s",
  //   description:
  //     "Design portfolio of Kai Takahashi",
  //   url: "https://kaitakahashi.com", // No trailing slash allowed!
  //   image: "/asssets/og.png", // Path to your image you placed in the 'static' folder
  //   twitterUsername: "@kaideas",
  // },
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
    `gatsby-plugin-offline`
    
  ],
}
