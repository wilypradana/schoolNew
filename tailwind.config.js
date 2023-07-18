/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      sans: ["Noto Sans", "sans-serif"],
      popins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        main: "#0A6EBD",
        secondary: "#A1C2F1",
        thrid: "#E7CEA6",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
