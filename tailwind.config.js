/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          600: '#ca9d1a',
          700: '#b8911a',
        },
        cream: '#FBF8F3',
        dark: '#1a1a1a',
        accent: '#8B7355',
      },
      fontFamily: {
        persian: ['Vazirmatn', 'sans-serif'],
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
    },
  },
}
