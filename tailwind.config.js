/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        darkBlue: 'hsl(233, 26%, 24%)',
        limeGreen: 'hsl(136, 65%, 51%)',
        brightCyan: 'hsl(192, 70%, 51%)',
        grayischBlue: 'hsl(233, 8%, 62%)',
        lightGrayischBlue: 'hsl(220, 16%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  screens: {
    xs: '480px',
    ss: '620px',
    sm: '768px',
    md: '1060px',
    lg: '1200px',
    xl: '1700px',
  },
  plugins: [],
}
