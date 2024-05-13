
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
    gridTemplateColumns: {
      autofit: 'repeat(auto-fit, minmax(300px, 1fr))'
    },

  },
  plugins: [
    flowbite.plugin(),
  ],
}