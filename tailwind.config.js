const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
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
      filter: ["hover", "group-hover"],
    },
  },
  plugins: [],
}
