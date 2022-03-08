module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: "500px",
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
};
