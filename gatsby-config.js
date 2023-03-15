module.exports = {
  siteMetadata: {
    title: `Shakhsiyah Schools  `,
    description: `Shakhsiyah Schools are governed by the Principles of Shakhsiyah Education, which have been developed through extensive research in order to generate a 21st century Islamic educational model that is true to the Qur’an and sunnah.`,
    author: `@r-ichard`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`webp`, `jpg`],
          placeholder: `blurred`,
          quality: 20,
          backgroundColor: `transparent`,
        }
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-bootstrap-5`,
        short_name: `gb5-starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-plugin-complex-sitemap-tree",
      options: {
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        serialize: ({ path }) => ({
          url: path,
          changefreq: "daily",
          priority: 0.7,
        }),
        output: "/sitemap.xml",
      },
    },
  ],
};
