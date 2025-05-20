/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#FCE8E8',
            100: '#F9D1D1',
            200: '#F4A3A3',
            300: '#EF7575',
            400: '#EA4747',
            500: '#E51919',
            600: '#B71414',
            700: '#890F0F',
            800: '#5C0A0A',
            900: '#2E0505',
          },
          secondary: {
            50: '#F7F4F0',
            100: '#EFE8E0',
            200: '#DFD2C1',
            300: '#CFBBA2',
            400: '#BFA583',
            500: '#AF8E64',
            600: '#8C7250',
            700: '#69553C',
            800: '#463928',
            900: '#231C14',
          },
          dark: '#1A1A1A',
          light: '#F9F9F9'
        },
        fontFamily: {
          'playfair': ['Playfair Display', 'serif'],
          'montserrat': ['Montserrat', 'sans-serif'],
          'cormorant': ['Cormorant Garamond', 'serif']
        },
        boxShadow: {
          'elegant': '0 10px 30px -10px rgba(0, 0, 0, 0.1)',
          'card': '0 15px 35px rgba(0, 0, 0, 0.1)'
        },
        height: {
          'screen-90': '90vh',
          'screen-80': '80vh'
        },
        animation: {
          'fade-in': 'fadeIn 0.8s ease-in-out forwards',
          'slide-up': 'slideUp 0.8s ease-out forwards',
          'pulse-slow': 'pulse 5s infinite'
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' }
          },
          slideUp: {
            '0%': { transform: 'translateY(20px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' }
          }
        }
      },
    },
    plugins: [],
  }