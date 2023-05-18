/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
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

      "xl": '1205px',

      "2xl": "1405px"
    },
    fontFamily: {
      "Catamaran": ['Catamaran', 'sans-serif'],
      "roboto": ['Roboto', 'sans-serif'],
      "sacramento": ["Sacramento", "cursive"]
    },
    extend: {
      boxShadow: {
        "kh": "0 0 1.25rem rgba(108,118,134,0.1)"
      },
      colors: {
        'rad-kh': '#ea512e',
        'yellow-kh': "#f5890d",
        "kh-white": "#fff ",
        'seandary-bg': '#fdf6ed',
        "kh-heading": "#1b0238",
        "p-kh": '#6b6b84',
        'org-light-jo': '#ffba6a'

      },
      keyframes: {
        slideInRight: {
          '50%': {
            transform: 'translateX(40px)',
            // marginRight: '20px',
          },
          '100%': {
            transform: 'translateX(0)',
            // marginRight: '20px',
          },
        },

        slideTopBottom: {
          '50%': {
            transform: 'translateY(40px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },




      },
    },

  },

  plugins: [
  ],
}