/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Alegreya", "sans-serif"],
        roboto: ["Roboto", "serif"],
      },
    },
  },
  plugins: [],
}

