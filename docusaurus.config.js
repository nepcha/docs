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
    {src: 'https://api.nepcha.com/js/nepcha-analytics.js', defer: true, 'data-site': 'nepcha.com'}
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
      image: 'img/nepcha-cover.jpg',

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
            label: 'Docs',
            position: 'right',
            to: '/docs',
          },
          {
            type: 'dropdown',
            label: 'Solutions',
            position: 'right',
            items: [
              // {
              //   type: 'html',
              //   className: 'mx-2 my-2',
              //   value: 'Use Cases',
              // },
              // {
              //   type: 'html',
              //   value: '<hr class="dropdown-separator">',
              // },
              {
                label: 'Ecommerce',
                to: '/ecommerce',
              },
              {
                label: 'Startups',
                to: '/startups',
              },
              {
                label: 'Enterprise',
                to: '/small-medium-enterprises',
              },
              
              {
                label: 'GOV',
                to: '/gov-institutions',
              },
              {
                label: 'Agencies',
                to: '/development-agencies',
              },
              {
                label: 'General',
                to: '/general-websites',
              },
              {
                label: 'Open Collective',
                to: '/open-collective',
              },
              {
                label: 'Web 3',
                to: '/web3-websites',
              },
            ],
          },
          {
            label: 'Pricing',
            position: 'right',
            to: '/#pricing',
          },
          {
            label: 'Login',
            position: 'right',
            to: 'https://app.nepcha.com/login',
          },
          {
            label: 'Sign Up',
            position: 'right',
            className: 'disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-white-100 hover:text-white-100 hover:no-underline shadow-md hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none  rounded-lg bg-black-200 hover:shadow-black-200  no-underline',
            to: 'https://app.nepcha.com/register',
          },
        ],
      },
      footer: {
        copyright: `All rights reserved. Copyright © ${new Date().getFullYear()} <a class="text-white-100" href="https://nepcha.com">Nepcha Analytics. </a>`,
        logo: {
          alt: 'Nepcha Logo',
          src: 'img/logoFooter.png',
        },
        links: [
          {},
          {
            items: [
              {
                html: `
                <ul class="list-none mix-blend-normal opacity-80 space-y-2 mt-2 text-white-100">
                  <li>
                    <b>Company</b>
                  </li>
                  <li>
                    <a class="text-white-100" href="/" target="_blank">Nepcha</a>
                  </li>
                  <li>
                    <a class="text-white-100" href="https://github.com/nepcha/docs" target="_blank">Github</a>
                  </li>
                  <li>
                    <a class="text-white-100" href="https://twitter.com/NepchaTeam" target="_blank">Twitter</a>
                  </li>
                </ul>
                  `,
              },
            ],
          },
          {
            items: [
              {
                html: `
                <ul class="list-none mix-blend-normal opacity-80 space-y-2 mt-2">
                  <li>
                    <b>Legal</b>
                  </li>
                  <li>
                    <a class="text-white-100" href="/terms">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a class="text-white-100" href="/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a class="text-white-100" href="/cookie-policy">Cookie Policy</a>
                  </li>
                </ul>
                `
              }
            ],
          },
          {}
        ]
      },

      prism: {
        theme: lightCodeTheme
      },
    }),
};

module.exports = config;
