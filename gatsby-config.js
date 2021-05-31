module.exports = {
  siteMetadata: {
    title: `FantaMulise`,
    description: `Website of the fantacalcio FantaMulise league.`,
    author: `@AParziale`,
    navigation: [
      {
        anchor: "#home",
        label: "Home",
      },
      {
        anchor: "#fantacalcio",
        label: "Fantacalcio",
      },
      {
        anchor: "#competitions",
        label: "Competizioni",
      },
      {
        anchor: "#about",
        label: "About",
      },
      {
        anchor: "#team",
        label: "Teams",
      }
    ],
    teams: [
      {
        name: 'DinhoTeam',
        coach: 'aparziale',
        imageName: 'dinhoTeam.png'
      },
      {
        name: 'fc Aston birra',
        coach: 'jz4mik',
        imageName: 'astonBirra.png'
      },
      {
        name: 'Atleticomanontroppo FC',
        coach: 'scamone73',
        imageName: 'atleticoMaNonTroppo.png'
      },
      {
        name: 'Calcio Samba',
        coach: 'dada82dada82',
        imageName: 'calcioSamba.png'
      },
      {
        name: 'cb forever',
        coach: 'Antonio',
        imageName: 'cbForever.png'
      },
      {
        name: 'CSKA La Rissa',
        coach: 'FrancescoGuerriero',
        imageName: 'cskaLaRissa.png'
      },
      {
        name: 'Eva1432',
        coach: 'Eva1432',
        imageName: 'eva1432.png'
      },
      {
        name: 'Mazzamaurielle',
        coach: 'domenicomazzamaurielle',
        imageName: 'mazzamaurielle.png'
      },
      {
        name: 'Polesiana',
        coach: 'libero80m',
        imageName: 'polesiana.png'
      },
      {
        name: 'Team Chiappetto',
        coach: 'Lommy85',
        imageName: 'teamChiappetto.png'
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: "/fantamulise"
}
