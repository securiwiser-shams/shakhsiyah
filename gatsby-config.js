module.exports = {
  siteMetadata: {
    title: `Shakhsiyah Schools`,
    titleTemplate: `%s | My Site`,
    description: `Shakhsiyah Schools are governed by the Principles of Shakhsiyah Education, which have been developed through extensive research in order to generate a 21st century Islamic educational model that is true to the Qur’an and sunnah.`,
    author: `@r-ichard`,
    siteUrl: 'https://shakhsiyah.netlify.app/',
    url: `https://shakhsiyah.netlify.app/`,
    image: `static/gatsby-icon.png`, 
    twitterUsername: "AbuRuqyyyah",
  },
  plugins: [
    `gatsby-plugin-sitemap`,
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
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://shakhsiyah.netlify.app`
      }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://shakhsiyah.netlify.app',
        sitemap: `https://shakhsiyah.netlify.app/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
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
      resolve: `gatsby-plugin-react-helmet`,
      options: {
        defer: false,
      },
    }
  ],
}
