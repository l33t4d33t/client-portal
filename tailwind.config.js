/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in': { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
      },
      colors: {
        brand: {
          50:  '#f0f4ff',
          100: '#dce8ff',
          500: '#4f6ef7',
          600: '#3b55e6',
          700: '#2d42cc',
          900: '#1a2580',
        },
      },
    },
  },
  plugins: [],
}
