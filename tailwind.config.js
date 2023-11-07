const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        titleFont: ["Roboto", "sans-serif"],
        bodyFont: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        amazon_blue: "#232f3e",
        amazon_yellow: "#febd69",
        amazon_light: "rgb(35 47 62 / 90%)",
        whiteText: "#ffffff",
        lightText: "#ccc",
        quanityBox: "#f0f2f2",
        footerBottom: "#131a22",
      },
      boxShadow: {
        testShadow: "0px 0px 32px 1px rgba(199,199,199,1)",
        amazonInput: "0 0 3px 2px rgba(228 121 17 / 50%)",
      },
    },
  },
  plugins: [],
});
