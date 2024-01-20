/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing : {
        '100' : '110px',
        '15' : '15px',
      },
      backgroundColor : {
        homeOneColor : "#d95103",
        formBackCol : "#0c6967"
    },
    colors :{
      ownColor : "#d95103"
    }
    },
  },
  plugins: [],
}

