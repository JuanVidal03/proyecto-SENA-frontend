/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'azul-fuerte': '#000074',
        'azul-gradiente': '#0000749f',
        'gris-suave': '#f2f2f2'
      },
      boxShadow:{
        'login': '0px 0px 10px rgba(0, 0, 0, 0.2)'
      },
      keyframes:{
        'bounce-login': {
          '0%, 100%': {transform: 'translateY(15px) translateX(15px)'},
          '50%': {transform: 'translateY(0px) translateX(0px)'},
        },
      },
      animation:{
        'bounce-login': 'bounce-login 3s infinite'
      }
    },
  },
  plugins: [],
}