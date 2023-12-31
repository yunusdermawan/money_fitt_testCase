/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        league: ['League Spartan']
      }
    },
  },
  plugins: [require("daisyui")],
}

