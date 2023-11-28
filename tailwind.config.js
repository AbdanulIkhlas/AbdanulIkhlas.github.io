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
      }
    },
  },
  plugins: [],
}