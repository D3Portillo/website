const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        cyan: "#00E0E3",
        yellow: "#FFDE00",
      },
    },
  },
  variants: {
    extend: {
      translate: ["group-hover"],
      display: ["group-hover", "group-focus"],
      filter: ["hover"],
    },
  },
  plugins: [],
}
