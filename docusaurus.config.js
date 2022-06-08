// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Verantwoordingsdocument',
  tagline: 'Dinosaurs are cool',
  url: 'https://unlimited-hr.github.io/',
  baseUrl: '/verantwoordingsdocument/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'unlimited-hr', // Usually your GitHub org/user name.
  projectName: 'verantwoordingsdocument', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Unlimited HR',
        logo: {
          alt: 'Unlimited HR',
          src: 'img/cmgt-logo.png',
        },
        items: [
          {to: '/', label: 'Verantwoordingsdocument', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Verantwoordingsdocument',
            items: [
              {
                label: 'Introductie',
                to: '/',
              },
            ],
          },
          {
            title: 'Medewerkers',
            items: [
              {
                label: 'Nigel Ritfeld',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Dani Verschoor',
                href: 'https://github.com/UpperCi',
              },
              {
                label: 'Mattijn Stolk',
                href: 'https://www.linkedin.com/in/mattijn-stolk-24a6441b8/',
              },
              {
                label: 'Stefan de Gier',
                href: 'https://www.linkedin.com/in/stefan-de-gier-370208141/',
              },
              {
                label: 'Christel Carbajal Torres',
                href: 'https://www.linkedin.com/in/christel-carbajal-torres/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
