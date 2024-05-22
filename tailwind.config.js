/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["'Poppins'", 'sans-serif'],
        // Add other families similarly
      },
      minWidth: {
        '30rem': '30rem',
      },
    },
  },
  plugins: [],
}
