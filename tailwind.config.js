/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        inter: "Inter",
      },
      colors: {
        primaryColor: "#0f172a",
        secondaryColor: "#3bc7fd",
        thirdColor: "#293548",
        textColor: "#8795aa",
      },
    },
  },
  plugins: [],
};

