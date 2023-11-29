/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily:{
        'lato':'Lato',
        'poppins':'Poppins',
        'openSans':'Open Sans',
        'novaSquare':'Nova Square'
      },
      colors: {
        'primaryColor': '#950101',
        'secondaryColor':'#03002C',
        'customYellow':'#F0C929',
        'bgSocial':'#f1e509d4'
      },
      boxShadow: {
        'socialShadow':'0 0 20px #fffb01'
      },
      screens: {
        'extraSmall':{'max': '350px'},
        // => @media (max-width: 350px)
        'hp':{'max': '420px'},
        // => @media (max-width: 420px) { ... }
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}