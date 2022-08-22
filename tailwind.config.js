/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:  {      
      sm: '640px',
   

      md: '768px',


      lg : '769px',
    
      xl: '1280px',
 

      '2xl': '1536px',
     
    },
    
    extend: {
      colors: {
        'regal-blue': 'red',
        'orange' : 'var(--orange)',
        'dark' : '#27262b',
      },
      backgroundColor : {
        'dark' : '#27262b',
        'orange' : 'var(--orange)',
        'light-dark' : 'var(--light-dark)',    
      },
    },
    
   
  },
  plugins: [],
}
