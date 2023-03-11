/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:  {      
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
     
    },
    
    extend: {
      colors: {
        'regal-blue': 'red',
        'orange' : 'var(--orange)',
        'dark': '#27262b',
        'lightest-navy': '#233554',
        'light-navy': '#112240',
        'dark-navy': '#020c1b',
        'navy': '#0a192f',
       
      },
      backgroundColor : {
        'dark' : '#27262b',
        'orange' : 'var(--orange)',
        'light-dark': 'var(--light-dark)',  
      },
    },
    
   
  },
  plugins: [],
}
