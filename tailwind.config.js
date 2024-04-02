/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    gridColumn: {
      'span-16': 'span 16 / span 16',
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: theme => ({
        'psch': "url('https://i.imgur.com/yourimagename.jpg')",
      }),
    },
  },
  variants: {},
  plugins: [],
}