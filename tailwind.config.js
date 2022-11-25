/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./public/*.js"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        libre_baskerville: ["Libre Baskerville", "serif"],
      },
      colors: {
        softRed: "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        dark_desaturated_cyan: "hsl(167, 40%, 24%)",
        darkBlue: "hsl(198, 62%, 26%)",
        dark_moderate_cyan: "hsl(168, 34%, 41%)",
        very_dark_desaturated_blue: "hsl(212, 27%, 19%)",
        very_dark_grayish_blue: "hsl(213, 9%, 39%)",
        dark_grayish_blue: "hsl(232, 10%, 55%)",
        grayishBlue: "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
        footerBg: "hsl(167, 36%, 64%)",
      }
    },
  },
  plugins: [],
}
