/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888885",
        },
      },

      fontFamily: {
        body: ["Nunito"],
      },
      fontSize: {
        mammoth: ["6rem"],
      },
    },
  },
  plugins: [],
}

