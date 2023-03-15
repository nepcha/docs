// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const organizationName = 'nepcha';
const projectName = 'docs';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Nepcha',
  tagline: 'A privacy-focused analytics tool for companies & startups.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://nepcha.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: `${organizationName}`, // Usually your GitHub org/user name.
  projectName: `${projectName}`, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // Add scripts
  scripts: [
    {src: 'https://api.nepcha.com/js/tracker.js', defer: true, 'data-site': 'nepcha.com'}
  ],

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'GTM-MNK4D4P',
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',

      // Disable dark/light toggle
      colorMode: {
        disableSwitch: true
      },

      navbar: {
        logo: {
          alt: 'Nepcha Logo',
          src: 'img/logoNavbar.png',
        },
        items: [
          {
            type: 'html',
            position: 'right',
            value: '<a href="/docs" class="block antialiased font-roboto text-sm leading-normal text-black-100 p-1 font-bold">Documentation</a>',
          },
          {
            type: 'html',
            position: 'right',
            value: '<a href="/#pricing" class="block antialiased font-roboto text-sm leading-normal text-black-100 p-1 font-bold">Pricing</a>',
          },
          {
            type: 'html',
            position: 'right',
            value: '<a href="https://app.nepcha.com/login" class="block w-full font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 hover:text-white-100 hover:no-underline shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none text-xs py-3 px-6 rounded-lg bg-black-200 hover:shadow-black-200 text-sm w-32 no-underline">Sign Up</a>',

          },
        ],
      },
      footer: {
        copyright: `All rights reserved. Copyright © ${new Date().getFullYear()} <a class="text-white-100" href="https://nepcha.com">Nepcha Analytics. </a>`,
        logo: {
          alt: 'Nepcha Logo',
          src: 'img/logoFooter.png',
        },
      },

      prism: {
        theme: lightCodeTheme
      },
    }),
};

module.exports = config;
