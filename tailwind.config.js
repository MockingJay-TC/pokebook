/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "'node_modules/preline/dist/*.js'",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E85382",
        secondary: "#39BADF",
        altenate: "#E1A725",
        dark: "#F1F1F1",
        gray: "#868686",
        g100: "#E1E1E1",
        g200: "#FCFCFC",
        g300: "#7B7B7B",
        g400: "#EEEEEE",
        gtop: "#7FCAD1",
        gline: "#D9D9D9",
        gdown: "#3DA0A9",
        tab: "#E9E9E9",
      },
      textColor: {
        skin: {
          base: "var(--primary)",
        },
      },
      borderColor: {
        skin: {
          base: "var(--primary)",
        },
      },
      backgroundColor: {
        skin: {
          base: "var(--primary)",
        },
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2200px",
      },
      backgroundImage: {
        noise: "url('assets/images/noise.svg')",
      },
    },
    fontFamily: {
      clash: ["clash"],
      general: ["general"],
    },
  },
  plugins: [],
};
