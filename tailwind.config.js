/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        /* Superficies (dark tech) */
        ink: {
          950: '#05070d',
          900: '#0a101c',
          800: '#111a2b',
          700: '#1a2740',
          600: '#24365a',
        },
        /* Acento eléctrico (cyan/violeta) */
        accent: {
          DEFAULT: '#22d3ee',
          soft: '#67e8f9',
          dim: '#0e7490',
          violet: '#8b5cf6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Arial', 'sans-serif'],
      },
      /* Borde por defecto oscuro: los `border` sin color quedan visibles en dark */
      borderColor: {
        DEFAULT: '#1e293b',
      },
    },
  },
  plugins: [],
}
