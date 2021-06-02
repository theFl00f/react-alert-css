module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "rac-deep-purple": "#181b7a",

        "rac-dark-purple": "#393c92",
        "rac-purple": "#585bd1",
        "rac-light-purple": "#ae97f9",
        "rac-peach": "#fd8786",
        "rac-light-peach": "#feb8bd",
        "rac-blue": "#5ac1fc",
        "rac-green": "#72dbd2",
        "rac-yellow": "#fdde96",
        black: "#474141",
      },
      typography: (theme) => ({
        "rac-green": {
          css: [
            {
              a: { color: theme("colors.rac-green") },
              "a code": { color: theme("colors.rac-green") },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      textColor: ["group-focus"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
