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
      }
    },
  },
  plugins: [],
}