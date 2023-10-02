/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  theme: {
    extend: {
      colors: {
        primary: { ...colors.indigo, DEFAULT: colors.indigo[600] }
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    }
  },
  plugins: []
}
