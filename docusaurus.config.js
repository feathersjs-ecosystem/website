// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Feathers',
  tagline: 'A framework for real-time applications and REST APIs',
  url: 'https://feathersjs.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'feathersjs', // Usually your GitHub org/user name.
  projectName: 'feathers', // Usually your repo name.
  stylesheets: [
    require.resolve('normalize.css/normalize.css'),
    'https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap'
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/feathersjs/docs/'
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/button.css'),
            require.resolve('./src/css/navbar.css'),
            require.resolve('./src/css/tailwind.css')
          ]
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Feathers Logo',
          src: 'img/feathers-logo-horizontal.svg',
          srcDark: 'img/feathers-logo-horizontal-inverted.svg'
        },
        items: [
          {
            href: 'https://github.com/feathersjs/feathers',
            label: 'GitHub',
            position: 'left'
          },
          {
            href: 'https://blog.feathersjs.com',
            label: 'Blog',
            position: 'left'
          },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs'
          },
          {
            href: 'https://docs.feathersjs.com/help',
            label: 'Help',
            position: 'left'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'Philosophy',
                href: 'https://blog.feathersjs.com/why-we-built-the-best-web-framework-you-ve-probably-never-heard-of-until-now-176afc5c6aac'
              },
              {
                label: 'Comparison',
                href: 'https://feathersjs.com/comparison'
              },
              {
                label: 'Ecosystem',
                href: 'https://github.com/feathersjs/awesome-feathersjs'
              }
            ]
          },
          {
            title: 'Learn',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro'
              },
              {
                label: 'Guides',
                href: 'http://docs.feathersjs.com/guides'
              },
              {
                label: 'Blog',
                href: 'https://blog.feathersjs.com'
              }
            ]
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Become a Backer',
                href: 'https://github.com/sponsors/daffl'
              },
              {
                label: 'Find Help',
                href: 'http://docs.feathersjs.com/help/'
              },
              {
                label: 'Github Issues',
                href: 'https://github.com/feathersjs/feathers/issues'
              }
            ]
          }
        ],
        copyright: `© 2014 — ${new Date().getFullYear()} Feathers contributors`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
};

module.exports = config;
