// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // disable Tailwind reset to avoid overriding Docusaurus styles
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx"],
  darkMode: ["class", '[data-theme="dark"]'], // hooks into docusaurus' dark mode settings
  theme: {
    colors: {
      white: "#fff",
      primary: {
        300: "#acdcf3",
        400: "#acdcf3",
        500: "#83caec",
        600: "#75c4ea",
        default: "#59b8e6",
        700: "#3dace2",
        800: "#2fa6e0",
        900: "#1d8cc2",
      },
      secondary: {
        300: "#ededed",
        400: "#d4d4d4",
        500: "#adadad",
        600: "#878787",
        default: "#878787",
        700: "#616161",
        800: "#141414",
        900: "#0d0d0d",
      },
      success: "#00fc82",
      warning: "#f4b400",
      danger: "#db4437",
      purp: "#9b5afc",
    },
    extend: {},
  },
  plugins: [],
};
