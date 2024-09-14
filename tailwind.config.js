/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'azul-fuerte': '#051061',
        'azul-gradiente': '#0000749f',
        'azul-iconos': '#041090',
        'gris-suave': '#f2f2f2',
        'dark': "#1e1e1e",
        'custom-purple': '#8B11E2',
        'gray-body': '#F8F8FB',
      },
      boxShadow:{
        'userCard': '0 .75rem 1.5rem rgba(18,38,63,.03)',
        'userCardHover': '0 1rem 3rem rgba(31,45,61,.125)!important'
      },
      backgroundSize:{
        '200': '200% 200%'
      },
      backgroundPosition:{
        'intialPosition': '0 0'
      },
      keyframes:{
        'moveHero': {
          '0%': { transform: 'translatey(-5px)' },
          '50%': { transform: 'translatey(5px)' },
          '100%': { transform: 'translatey(-5px)' },
        },
      },  
      animation:{
        'moveHero': 'moveHero 2.5s linear infinite',
      },
      backgroundImage: {
        'loginBg': 'url(./assets/lock-bg.jpg)'
      }
    },
  },
  plugins: [],
}