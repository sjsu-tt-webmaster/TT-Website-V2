const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/**
 * @type {import('tailwindcss').Config}
 */
const config = {
  content: ["./src/pages/**/*.{js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      gray: colors.neutral,
      darkRed: "#8B0000",
      gold: "#FFCC33",
      offWhite: "#EDEAB5",
    },
    fontFamily: {
      sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
    },
  },
  plugins: [],
};
export default config;
