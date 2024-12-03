/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      // colors:{
      //   "darkgreen": "#5bbe82",
      //   "lightgreen": "#58C182",
      //   "white": "#FFFFFF",
      //   "lightgray": "#E5E7EB",
      //   "darkgray": "#FFFFFF87"
      // }

      colors: {
        darkgreen: "var(--color-darkgreen) ",
        lightgreen: "var(--color-lightgreen) ",
        white: "var(--color-white) ",
        lightgray: "var(--color-lightgray) ",
        darkgray: "var(--color-darkgray) ",
      },
    },
  },
  plugins: [],
};
