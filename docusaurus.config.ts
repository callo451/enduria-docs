import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const siteUrl = process.env.DOCS_URL ?? 'https://docs.enduria.io';

const config: Config = {
  title: 'Enduria Documentation',
  tagline: 'Guides and API documentation for Enduria',
  favicon: 'img/favicon.svg',
  future: {v4: true},
  url: siteUrl,
  baseUrl: '/',
  organizationName: 'callo451',
  projectName: 'enduria-docs',
  onBrokenLinks: 'throw',
  markdown: {format: 'detect', hooks: {onBrokenMarkdownLinks: 'throw'}},
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [['classic', {
    docs: {
      sidebarPath: './sidebars.ts',
      routeBasePath: 'docs',
      editUrl: 'https://github.com/callo451/enduria-docs/edit/main/',
      showLastUpdateAuthor: false,
      showLastUpdateTime: false,
    },
    blog: false,
    sitemap: {changefreq: 'weekly', priority: 0.5},
    theme: {customCss: './src/css/custom.css'},
  } satisfies Preset.Options]],
  themeConfig: {
    image: 'img/social-card.svg',
    metadata: [{name: 'description', content: 'Official product, administrator, self-hosting, and API documentation for Enduria.'}],
    colorMode: {respectPrefersColorScheme: true},
    navbar: {
      hideOnScroll: true,
      logo: {alt: 'Enduria', src: 'img/enduria.svg', srcDark: 'img/enduria-dark.svg'},
      items: [
        {type: 'docSidebar', sidebarId: 'productSidebar', position: 'left', label: 'Product'},
        {type: 'docSidebar', sidebarId: 'adminSidebar', position: 'left', label: 'Administration'},
        {type: 'docSidebar', sidebarId: 'apiSidebar', position: 'left', label: 'API'},
        {type: 'docSidebar', sidebarId: 'hostingSidebar', position: 'left', label: 'Self-hosting'},
        {href: 'https://github.com/dean-enduria/Enduria-SaaS', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Learn', items: [
          {label: 'Get started', to: '/docs/getting-started/welcome'},
          {label: 'Use Enduria', to: '/docs/product/overview'},
          {label: 'API', to: '/docs/api/overview'},
        ]},
        {title: 'Operate', items: [
          {label: 'Administration', to: '/docs/admin/overview'},
          {label: 'Self-hosting', to: '/docs/self-hosting/overview'},
          {label: 'Troubleshooting', to: '/docs/troubleshooting'},
        ]},
        {title: 'Project', items: [
          {label: 'Source code', href: 'https://github.com/dean-enduria/Enduria-SaaS'},
          {label: 'AGPL-3.0 licence', href: 'https://www.gnu.org/licenses/agpl-3.0.html'},
        ]},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Enduria. Documentation licensed under AGPL-3.0.`,
    },
    docs: {sidebar: {hideable: true, autoCollapseCategories: true}},
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula, additionalLanguages: ['bash', 'json']},
  } satisfies Preset.ThemeConfig,
};

export default config;
