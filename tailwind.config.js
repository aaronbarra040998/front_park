/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'chathams-blue': {
          '50': '#f0f9ff',
          '100': '#e0f2fe',
          '200': '#bae5fd',
          '300': '#7ed1fb',
          '400': '#39baf7',
          '500': '#0fa2e8',
          '600': '#0381c6',
          '700': '#0467a0',
          '800': '#085784',
          '900': '#0d4c73',
          '950': '#082e49',
        },
        'card-default': '#f0f9ff', // Cambia este valor al color deseado
        "card-bg": "#2cd6bb",
      },
      
    },
  },
  plugins: [],
};
