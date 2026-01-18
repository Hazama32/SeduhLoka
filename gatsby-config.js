module.exports = {
  siteMetadata: {
    title: `Setiap Seduhan, Rasa di Rumah.`,
    description: `SeduhLoka Coffee - coffee shop homey di Bekasi dengan kopi premium Arabika & Robusta. Rasakan suasana nyaman seperti di rumah.`,
    siteUrl: "https://seduhlokacoffee.web.id",
    author: `M.Bintang Insan Cemerlang`,
    keywords: "SeduhLoka Coffee, Coffee shop di Bekasi Utara, Kopi premium di Bekasi, Tempat ngopi nyaman Bekasi, Tips seduh kopi rumahan, Cafe homey di Bekasi, Tempat nongkrong Bekasi Utara, SeduhLoka lahir dari sebuah filosofi sederhana, Rahasia seduhan kopi sempurna ala barista, Komunitas kopi Bekasi, Galeri Menu SeduhLoka, Kisah SeduhLoka dan Komunitas Kami, Arabika vs Robusta, Lokasi SeduhLoka Coffee, Iced Coffee SeduhLoka, Hot Latte SeduhLoka, Hot Cappuccino SeduhLoka, Manual Brew SeduhLoka,",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src`,
        name: "_content",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              // destinationDir: "public",
              ignoreFileExtensions: [
                `png`,
                `jpg`,
                `jpeg`,
                `bmp`,
                `tiff`,
                `webp`,
              ],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1360,
              withWebp: false,
              showCaptions: false,
              quality: 100,
              disableBgImageOnAlpha: false,
              wrapperStyle: `margin: 7vw 0;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Holo - Gatsby Starter Theme`,
        short_name: `Holo`,
        start_url: `/`,
        background_color: `#ebebfa`,
        theme_color: `#ebebfa`,
        display: `standalone`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        enableIdentityWidget: false,
      },
    },
    {
      resolve: "gatsby-plugin-decap-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
{
  resolve: `gatsby-plugin-sitemap`,
  options: {
    query: `
      {
        site {
          siteMetadata {
            siteUrl
          }
        }
        allSitePage {
          nodes {
            path
          }
        }
      }
    `,
    serialize: ({ site, allSitePage }) =>
      (allSitePage?.nodes || []).map(page => {
        return {
          url: new URL(page.path, site.siteMetadata.siteUrl).toString(),
          changefreq: `daily`,
          priority: 0.7,
        };
      }),
  },
},
    `gatsby-plugin-netlify`,
    `gatsby-plugin-gatsby-cloud`,
    "gatsby-plugin-postcss",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
