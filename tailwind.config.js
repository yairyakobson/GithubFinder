module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      sm: '320px-480px',
      md: '481px-768px',
      lg: '1025px-1200px',
      xl: '1201px',
    },
    extend: {}
  },
  plugins: [require('daisyui')],
}