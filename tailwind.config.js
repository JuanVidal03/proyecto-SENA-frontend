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
        'userCard': '0 .75rem 1.5rem rgba(18,38,63,.03)',
        'userCardHover': '0 1rem 3rem rgba(31,45,61,.125)!important'
      },
      backgroundSize:{
        '200': '200% 200%'
      },
      keyframes:{
        'moveLoginBg': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation:{
        'moveLoginBg': 'moveLoginBg 2s ease infinite'
      }
    },
  },
  plugins: [],
}