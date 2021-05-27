require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const companyURL = `https://bravenlandscapeandconstruction.com`;

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = companyURL,
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === `production`;
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const company = `Braven Landscape & Construction`;
const emailDisplay = 'bravenlandscape@hotmail.com';

module.exports = {
  siteMetadata: {
    title: `Landscape & Construction - Plympton, MA | ${company}`,
    description: `This is my description`,
    author: `John Grattan`,
    image: `src/assets/graphics/generic-logo-navbar-1000x199.png`,
    company,
    owner: `Henrique Almeida`,
    phoneDisplay: `(857) 756-3404`,
    phoneHref: `tel:+18577563404`,
    emailDisplay,
    emailHref: `mailto:${emailDisplay}?Subject=Important%20Email%20From%20Website`,
    address: `87 Center St, Plympton, MA 02367`,
    street: `87 Center St`,
    cityState: `Plympton, MA`,
    zip: `02367`,
    hours: `Mon-Sat: 7AM-5PM; Sun: 10AM-5PM`,
    gmbCID: `https://www.google.com/maps?cid=13760398526388246013`,
    gmbURL: `https://www.google.com/maps?cid=13760398526388246013`,
    gmbEmbedSrc: `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11862.165932860273!2d-70.807675!3d41.9886533!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbef6c18dd52e15fd!2sAngels%20Towing%20-%20Junk%20Car%20Mass!5e0!3m2!1sen!2sus!4v1621527104729!5m2!1sen!2sus`,
    facebookURL: `https://facebook.com`,
    instagramURL: `https://instagram.com`,
    twitterURL: `https://twitter.com`,
    youTubeURL: `https://youtube.com`,
    linkedInURL: `https://linkedin.com`,
    siteUrl,
    primaryColor: `#166534`,
    primaryColorLight: `#adff2f`,
    secondaryColor: `#18181b`,
    accentColor: `#eab308`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-force-trailing-slashes`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM',
        includeInDevelopment: false,
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `${siteUrl}/`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: siteUrl,
        sitemap: `${siteUrl}/sitemap.xml`,
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            // REMOVE BEFORE GOING LIVE
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: 'https://38d0107b3e52474fac5968802d0d9de2@o558164.ingest.sentry.io/5691301',
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() =>
          ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)(),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
  ],
};
