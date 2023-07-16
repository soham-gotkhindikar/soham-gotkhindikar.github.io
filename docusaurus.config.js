const math = require("remark-math");
const katex = require("rehype-katex");

const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/soham-gotkhindikar/",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/soham-gotkhindikar",
  },
  email: {
    label: "Email",
    href: "mailto:soham.sg@hotmail.com",
  },
  blog: {
    label: "Blog",
    to: "blog",
  },
  docs: {
    label: "Documentation",
    to: "docs",
  },
  porfolio: {
    label: "Portfolio",
    to: "portfolio",
  },
  resume: {
    label: "Resume",
    href: "https://soham-gotkhindikar.github.io/pdf/resume.pdf",
  },
};

module.exports = {
  title: "Soham Gotkhindikar",
  tagline:
    "A constantly curious student studying mechanical engineering and computer science.",
  url: "https://soham-gotkhindikar.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/logo.png",
  organizationName: "soham-gotkhindikar",
  projectName: "soham-gotkhindikar.github.io",
  trailingSlash: false,
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: "Soham Gotkhindikar",
      logo: {
        alt: "Soham Gotkhindikar",
        src: "img/logo.png",
        target: "_self",
      },
      items: [
        { to: "blog/", label: "Blog", position: "left" },
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "portfolio/", label: "Portfolio", position: "right" },
        {
          href: "https://drive.google.com/file/d/1-ZMQuWRKqaYSiYUYOD-eMxkxzdeSkGtr/view?usp=sharing",
          label: "Resume",
          position: "right",
        },
      ],
    },
    footer: {
        links: [
            internetProfiles.blog,
            internetProfiles.docs,
            internetProfiles.porfolio,
            internetProfiles.resume,
            internetProfiles.linkedin,
        ],
      // I built this website for my own personal use, but you are free to use it so long as you credit me. You can do so by linking back to evantay.com :)
      copyright: `Copyright © ${new Date().getFullYear()} Soham Gotkhindikar • Updated ${new Date().toLocaleDateString()}`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          disableVersioning: false,
          editCurrentVersion: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
  plugins:    [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
};
