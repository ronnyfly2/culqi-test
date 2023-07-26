/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope : ['Manrope', 'sans-serif'],
      },
      colors: {
        "culqi-primary": '#111827',
        "culqi-secondary": '#00A19B',
        "greyscale-500": '#A0AEC0',
        "focus": '#0CAF60',
      }
    },
  },
  plugins: [],
}

