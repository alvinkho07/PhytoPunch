/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        kombucha: {
          berry: '#6B2E4E',
          green: '#2D5F4F',
          gold: '#D4AF37',
          light: '#F5E6D3',
          cream: '#FAF7F2',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
