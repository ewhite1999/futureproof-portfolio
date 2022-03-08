module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      merriweather: ["Merriweather", "serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      screens: {
        xsm: "500px",
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
};
