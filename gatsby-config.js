const settings = require("./src/util/meta.json")

module.exports = {
  siteMetadata: {
    ...settings,
    siteUrl: settings.meta.siteUrl,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: settings.meta.title || `Belantara`,
        short_name: `Belantara`,
        start_url: `/`,
        background_color: settings.theme.background.light || `#F7F0EB`,
        theme_color: settings.theme.themeColor.dark || `#1A4555`,
        display: `standalone`,
        icon: `static/img/apple-touch-icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {}
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-decap-cms",
      options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.js`,
        customizeWebpackConfig: (config, { stage }) => {
          if (stage === 'develop') {
            config.plugins.push({
              apply: (compiler) => {
                compiler.watch = function (watchOptions, handler) {
                  compiler.run((err, stats) => {
                    if (handler) handler(err, stats)
                  })
                  return {
                    close: (cb) => { if (cb) cb() },
                    invalidate: () => {},
                  }
                }
              },
            })
          }
        },
      },
    },
    // Tailwind handles purging; no purgecss needed
    // Adapter handles Netlify integration in Gatsby v5
  ],
};
