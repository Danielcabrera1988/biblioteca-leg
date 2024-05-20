
import flowbite from 'flowbite-react/tailwind'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    variants: {
      borderWidth: ['responsive', 'hover', 'focus']
    },
    extend: {
      boxShadow: {
        'footer': '-8px 5px -4px rgba(0,0,0,0.25)',
        'card': '0px 5px 25px 0px rgba(0,0,0,0.75)',
      },
      gridTemplateColumns: {
        'autofit-cards': 'repeat(auto-fit, minmax(300px, 1fr))'
      },
    },
    fontFamily: {
      'Avenir-Medium': ['Avenir Book'],
      'Calibri': ['Calibri']
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}