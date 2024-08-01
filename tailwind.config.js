/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
    fontFamily: {
      subt:["Lobster","Pacifico"],
      title: ["Platypi", 'serif'],
      intro : ["Danfo", "serif"],
      bigfont: ["Anton", "sans-serif"]

    }
  },
  plugins: [
    flowbite.plugin(),
  ],
}