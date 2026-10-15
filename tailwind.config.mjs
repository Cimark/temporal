/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './src/styles/**/*.css'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        eco: {
          50: '#F3F4F3', // Fondo neutro claro — secciones alternas
          100: '#EEF3D4',
          200: '#D9E19C',
          400: '#BCCB62',
          500: '#A8B738', // Olive Green — acento oficial
          600: '#7E8B45',
          700: '#64703D',
          800: '#3B5F39',
          900: '#264A2B',
          950: '#19341C', // Dark Green — fondos
        },
        'eco-gray': '#646564', // Medium Gray — textos secundarios
      },
    },
  },
  plugins: [],
};
