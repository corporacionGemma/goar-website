/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', './src/**/**/*.{jsx,js,ts,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primary: '#FF5E14',
        secondary: {
          color: '#00235A',
          text: '#001659'
        },
        tertiary: {
          footerColor: '#0A1229',
          footer1: '#9CA5AF',
          text: '#DEDFE0',
          footer2: '#F5F6F7',
          border: '#E8E8E9',
          borderFooter: '#1D263F'
        }
      }
    }
  },
  plugins: []
}
