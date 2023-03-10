
/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  darkMode: 'class',
  content: [
    "./docs/**/*.{md, mdx, html,js, jsx, ts, tsx}",
    "./src/**/*.{md, mdx, html, js, jsx, ts, tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      noto: "Noto Sans",
      roboto: "Roboto Mono",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        100: "#ffffff",
        200: "#FCFCFD",
      },
      black: {
        100: "#0F172A",
        200: "#1E293B",
        300: "#334156",
      },
      blue: {
        100: "#1A237E",
        200: "#1E48E4",
      },
      purple: {
        100: "#3534E5",
      },
      gray: {
        100: "#64748B",
        200: "#252726",
        300: "#DDDFE5",
        400: "#D8D8D8",
        500: "#6b7280",
      },
    },
    extend: {
      height: {
        17: "4.375rem",
      },
      width: {
        17: "4.375rem",
      },
      lineHeight: {
        sm: "30px",
        lg: "50px",
        "2xl": "66px",
      },
      backgroundImage: {
        synops: "url('@site/static/img/headerImage.png')",
        bgtools: "url('@site/static/img/backgroundTools.png')",
        features: "url('@site/static/img/backgroundFeatures.png')",
        footerbg: "url('@site/static/img/backgroundFooter.png')",
        goalconversion: "url('@site/static/img/backgroundGradient.png')",
        sidegoalconversion: "url('@site/static/img/backgroundLogo.svg')",
        customers: "url('@site/static/img/customers-bg.svg')",
        firstCustomer: "url('@site/static/img/users/eugen.jpeg')",
        secondCustomer: "url('@site/static/img/users/alex.jpeg')",
        thirdCustomer: "url('@site/static/img/users/rares.jpeg')",
      },
      screens: {
        "sm-max": { max: "640px" },
      },
      maxWidth: {
        "screen-3xl": "1920px",
      },
      backgroundSize: {
        featureSizeRight: "750px 510px",
        featureSizeLeft: "520px 390px",
        footerSize: "1200px 700px",
        customerSize: "1000px 650px",
      },
      backgroundPosition: {
        customerPosition: "center 40px",
      },
      fontSize: {
        "8.5xl": [
          "6.875rem",
          {
            lineHeight: "6.5rem",
            letterSpacing: "-3px",
            fontWeight: "700",
          },
        ],
      },
    },
  },
  plugins: [],
};
