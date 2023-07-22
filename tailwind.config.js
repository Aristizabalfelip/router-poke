/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      radialGradients: {
        'gradient-custom': 'radial-gradient(red 10px, yellow 30%, #1e90ff 50%)',
      },
    },
  },
  plugins: [],
}

