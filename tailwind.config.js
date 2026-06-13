/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        comefyr: {
          olive: '#9FA615',
          'olive-dark': '#7F850F',
          blue: '#003B71',
          green: '#1F4D3A',
          gold: '#B88A2E',
          ice: '#EAF3FA',
          soft: '#F6F8FA',
          white: '#FFFFFF',
          text: '#102A43',
          muted: '#5F6B7A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        card: '1rem',
        'card-lg': '1.5rem',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 59, 113, 0.08)',
        nav: '0 2px 16px rgba(0, 59, 113, 0.1)',
      },
    },
  },
  plugins: [],
}
