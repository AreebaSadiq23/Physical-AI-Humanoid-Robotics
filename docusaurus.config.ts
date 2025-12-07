import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'An AI-native technical textbook on Physical AI & Humanoid Robotics',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://physical-ai-humanoid-robotics-textbook.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gemini-hackathon', // Usually your GitHub org/user name.
  projectName: 'physical-ai-humanoid-robotics-textbook', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
        },
        blog: false, // Disable the blog plugin
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics',
      logo: {
        alt: 'Textbook Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'textbook',
          position: 'left',
          label: 'Textbook',
        },
        {
          to: '/signin',
          label: 'Sign In',
          position: 'right',
          className: 'button button--secondary navbar-button',
        },
        {
          to: '/signup',
          label: 'Sign Up',
          position: 'right',
          className: 'button button--primary navbar-button',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Project Info',
          items: [
            {
              label: 'About Us',
              to: '/about',
            },
            {
              label: 'Contact',
              to: '/contact',
            },
          ],
        },
        {
          title: 'Quick Links',
          items: [
            {
              label: 'Textbook',
              to: '/docs/intro',
            },
            {
              label: 'Modules',
              to: '/modules',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/gemini-hackathon',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/gemini-hackathon',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gemini Textbook. All rights reserved.`,
    },
    prism: {
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;