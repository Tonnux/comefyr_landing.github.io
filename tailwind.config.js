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
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '1rem',
        'card-lg': '1.5rem',
      },
      boxShadow: {
        card: '0 4px 24px rgba(0, 59, 113, 0.08)',
        'card-hover': '0 8px 32px rgba(0, 59, 113, 0.12)',
        nav: '0 2px 16px rgba(0, 59, 113, 0.1)',
        institutional: '0 20px 60px rgba(0, 59, 113, 0.14)',
      },
      backgroundImage: {
        'hero-pattern':
          'radial-gradient(circle at 20% 20%, rgba(234, 243, 250, 0.9) 0%, transparent 50%), radial-gradient(circle at 80% 60%, rgba(159, 166, 21, 0.06) 0%, transparent 40%)',
        'trust-band':
          'linear-gradient(180deg, rgba(234, 243, 250, 0.65) 0%, rgba(255, 255, 255, 1) 100%)',
      },
      transitionDuration: {
        250: '250ms',
      },
    },
  },
  plugins: [],
}
