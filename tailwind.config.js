/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        secondary: "#151312",
        light: {
          100: "#D6C6FF",
          200: "#A8B2DB2",
          300: "#9CA4A",
        },
        dark: {
          100: "#221F3D",
          200: "#0F0D23",
          300: "#9CA4A",
        },
        accent: "#AB8BFF"
      }
    },
  },
  plugins: [],
}