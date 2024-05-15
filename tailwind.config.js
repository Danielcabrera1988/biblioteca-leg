
import flowbite from 'flowbite-react/tailwind'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Avenir-Medium': ['Avenir Book'],
      'Calibri': ['Calibri']
    },
    gridTemplateColumns: {
      autofit: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    boxShadow: {
      footer: '0px -8px 5px -4px rgba(0,0,0,0.25) '
    }
  },
  plugins: [
    flowbite.plugin(),
  ],
}