/** @type {import('tailwindcss').Config} */

export default {

  content: ['./index.html', './src/**/*.{js,jsx}'],

  safelist: [

    // Garantiza que los colores de botones principales nunca se purguen del CSS

    'bg-[#EDC765]',

    'hover:bg-[#E5BC58]',

    'active:bg-[#DDB04E]',

    'text-[#033159]',

    'border-[#DDB04E]',

    'bg-comefyr-goldButton',

    'hover:bg-comefyr-goldButtonHover',

    'active:bg-comefyr-goldButtonPressed',

    'border-comefyr-goldButtonPressed',

  ],

  theme: {

    extend: {

      colors: {

        comefyr: {

          // Azul principal institucional

          blue: '#033159',

          // Dorado acento — títulos, líneas, detalles editoriales (#D9A443)

          gold: '#D9A443',

          // Dorado botones — CTAs principales (#EDC765)

          goldButton: '#EDC765',

          goldButtonHover: '#E5BC58',

          goldButtonPressed: '#DDB04E',

          // Alias kebab-case (compatibilidad con clases existentes)

          'gold-button': '#EDC765',

          'gold-button-hover': '#E5BC58',

          'gold-button-pressed': '#DDB04E',

          // Fondos suaves

          soft: '#F2F2F2',

          ice: '#F2F2F2',

          white: '#FFFFFF',

          text: '#033159',

          muted: '#5F6B7A',

          // Azul profundo para gradientes institucionales

          green: '#022547',

          // Alias legacy → acento dorado (evita oliva en UI)

          olive: '#D9A443',

          'olive-dark': '#C89338',

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

        card: '0 4px 24px rgba(3, 49, 89, 0.08)',

        'card-hover': '0 8px 32px rgba(3, 49, 89, 0.12)',

        nav: '0 2px 16px rgba(3, 49, 89, 0.1)',

        institutional: '0 20px 60px rgba(3, 49, 89, 0.14)',

      },

      backgroundImage: {

        'hero-pattern':

          'radial-gradient(circle at 20% 20%, rgba(242, 242, 242, 0.95) 0%, transparent 50%), radial-gradient(circle at 80% 60%, rgba(217, 164, 67, 0.07) 0%, transparent 40%)',

        'trust-band':

          'linear-gradient(180deg, rgba(242, 242, 242, 0.85) 0%, rgba(255, 255, 255, 1) 100%)',

      },

      transitionDuration: {

        250: '250ms',

      },

    },

  },

  plugins: [],

}


