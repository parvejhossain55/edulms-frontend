/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      //set for HomePage by @kamrul
      'sm': '575px',

      'md': '765px',

      'lg': '995px',

      "xl":'1205px',

      "2xl":"1405px"
    },
    fontFamily:{
      "Catamaran":['Catamaran','sans-serif'],
      "roboto":['Roboto', 'sans-serif'],
      "sacramento": ["Sacramento", "cursive"]
    },
    extend: {
      colors: {
        'rad-kh':'#ea512e',
        'yellow-kh':"#f5890d",
        "kh-white":"#fff ",
        'seandary-bg':'#fdf6ed',
        "kh-heading":"#1b0238",
        "p-kh":'#6b6b84'
      },
    },
  },
  plugins: [
  ],
}