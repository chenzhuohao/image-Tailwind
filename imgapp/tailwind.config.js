const colors = require("tailwindcss/colors");
module.exports = {
  purge: [
    "./src/App.vue",
    "./src/pages/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  mode: "jit", // 是否开启jit模式，开启以后编译会更快，当然，tailwindcss版本需要在2.1以上
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
