/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
    'sans': 'Roboto',
    },

    extend: {
      screens:{
        "md": "855px",
      },
    },
  },
  plugins: [],
}

