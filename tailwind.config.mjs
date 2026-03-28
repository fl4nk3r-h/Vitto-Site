/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        red: {
          500: '#D32F2F',
          600: '#B71C1C',
        },
        navy: {
          900: '#1A1A2E',
        },
      },
      boxShadow: {
        'red-glow': '0 0 0 2px #D32F2F33, 0 4px 32px 0 #D32F2F22',
      },
      backgroundImage: {
        'noise': "url('/noise.png')",
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
