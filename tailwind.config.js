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
        /* AcentoAzul de marca, derivado de #005CBB (plan: azul/blanco/negro) */
        accent: {
          DEFAULT: '#2b8fe0',
          soft: '#93cbf4',
          dim: '#005CBB',
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
