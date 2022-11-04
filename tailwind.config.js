/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#000',
        primary: '#EAECF0',
        secondary: '#101828',
        blue: "#1570EF", 
        gray:{
          primary:"#667085",
          600: "#475467",
          700: "#344054",
          900: "#101828"
        } ,
       
      },
    },
    screens: {
      sm: { max: "650px" },
      md: { min: "651px", max: "1024px" },
      lg: { min: "1024px" },
    },
  },
  plugins: [],
}