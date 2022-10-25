// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const { SITE_LINKS } = require("./src/constants");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Hadmean",
  tagline:
    "Hadmean is an internal tool generator. It is language agnostic, schema driven, extremely customizable, fully featured, user-friendly and has just one installation step.",
  url: "https://hadmean.github.io",
  baseUrl: "/hadmean/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  organizationName: "hadmean",
  projectName: "hadmean",

  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    require.resolve("@cmfcmf/docusaurus-search-local"),
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
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/hadmean/archaea/edit/main",
        },
        blog: {},
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Hadmean Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: SITE_LINKS.GITHUB,
            label: "GitHub",
            position: "right",
          },
          {
            href: SITE_LINKS.DISCORD,
            label: "Discord",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: SITE_LINKS.STACK_OVERFLOW,
              },
              {
                label: "Discord",
                href: SITE_LINKS.DISCORD,
              },
              {
                label: "Twitter",
                href: SITE_LINKS.TWITTER,
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: SITE_LINKS.GITHUB,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Hadmean, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
