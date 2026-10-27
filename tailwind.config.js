/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],

  theme: {
    extend: {
      fontFamily: {
        heading: ["Fredoka-SemiBold"],
        "recipe-title": ["Fredoka-Medium"],
        body: ["Nunito-Regular"],
        ingredient: ["Nunito-Medium"],
        button: ["Nunito-Bold"],
      },
      colors: {
        background: "#FBFCFB",
        primary: "#8FB89A",
        "primary-dark": "#53765B",
        "sage-light": "#EEF4ED",
        cream: "#F7E9D8",
        foreground: "#493F38",
      },
    },
  },

  plugins: [],
};
