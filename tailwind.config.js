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
        'azul-iconos': '#291CAB',
        'gris-suave': '#f2f2f2',
        'dark': "#1e1e1e",
        'naranja-suave': "#FC7820",
        'naranja-fuerte': "#C32227"
      },
      boxShadow:{
        'login': '0px 0px 10px rgba(0, 0, 0, 0.2)'
      },
      keyframes:{
        'infinite-move-login': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation:{
        'infinite-move-login': 'infinite-move-login 10s linear infinite'
      }
    },
  },
  plugins: [],
}