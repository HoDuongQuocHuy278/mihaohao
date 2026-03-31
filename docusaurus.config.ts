import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Hảo Hảo - Hương Vị Việt',
  tagline: 'Hương vị mì ăn liền quốc dân, gắn kết mọi thế hệ',
  favicon: 'img/hao-hao-logo.png',
  url: 'https://HoDuongQuocHuy278.github.io',
  baseUrl: '/mihaohao/',
  organizationName: 'HoDuongQuocHuy278',
  projectName: 'mihaohao',
  trailingSlash: true,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: 'gh-pages',
  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/docs',
          editUrl: 'https://github.com/HoDuongQuocHuy278/mihaohao/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [{ name: 'keywords', content: 'mì hảo hảo, acecook, mì ăn liền, thực phẩm, việt nam' }],
    image: 'img/hao-hao-social-card.jpg',
    navbar: {
      title: 'Hảo Hảo',
      logo: {
        alt: 'Hảo Hảo Logo',
        src: 'img/hao-hao-logo.png',
      },
      items: [
        { to: '/', label: 'Trang chủ', position: 'left' },
        { to: '/category', label: 'Danh mục sản phẩm', position: 'left' },
        { to: '/manufacturer', label: 'Nhà sản xuất', position: 'left' },
        { to: '/products', label: 'Sản phẩm chi tiết', position: 'left' },
        { to: '/contact', label: 'Liên hệ', position: 'left' },
        {
          href: 'https://github.com/HoDuongQuocHuy278/mihaohao',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Hảo Hảo',
          items: [
            { label: 'Trang chủ', to: '/' },
            { label: 'Sản phẩm', to: '/products' },
          ],
        },
        {
          title: 'Cộng đồng',
          items: [
            { label: 'Facebook', href: 'https://www.facebook.com/HaoHaoAcecookVietnam' },
            { label: 'GitHub', href: 'https://github.com/HoDuongQuocHuy278/mihaohao' },
          ],
        },
        {
          title: 'Liên hệ',
          items: [
            { label: 'Email', href: 'mailto:contact@acecookvietnam.com' },
            { label: 'Hotline', href: 'tel:19001234' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mì Hảo Hảo - Acecook Việt Nam. Built with ❤️ for Vietnamese taste.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
