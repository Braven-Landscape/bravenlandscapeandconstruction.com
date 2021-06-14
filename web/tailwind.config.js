// tailwind.config.js
const colors = require('tailwindcss/colors');

const primary = {
  light: '#adff2f',
  default: '#166534',
  dark: '#166534',
};

const secondary = {
  light: '#18181b',
  default: '#18181b',
  dark: '#18181b',
};

const accent = {
  light: '#eab308',
  default: '#eab308',
  dark: '#eab308',
};

const heroHeadline = {
  light: '#faebd7',
  default: '#faebd7',
  dark: '#faebd7',
};

module.exports = {
  future: {},
  // purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',

      white: colors.white,
      gray: colors.gray,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.purple,
      pink: colors.pink,
      primary: {
        light: primary.light,
        DEFAULT: primary.default,
        dark: primary.dark,
      },
      secondary: {
        light: secondary.light,
        DEFAULT: secondary.default,
        dark: secondary.dark,
      },
      accent: {
        light: accent.light,
        DEFAULT: accent.default,
        dark: accent.dark,
      },
      heroHeadline: {
        light: heroHeadline.light,
        DEFAULT: heroHeadline.default,
        dark: heroHeadline.dark,
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  // plugins: {
  //   "@tailwindcss/jit": {},
  //   autoprefixer: {},
  // },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
