/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: { colors: { carbon: '#090909', panel: '#141414', red: '#e51b23', gold: '#f8c515' }, fontFamily: { display: ['Bebas Neue', 'sans-serif'], body: ['Poppins', 'sans-serif'] }, boxShadow: { red: '0 0 28px rgba(229,27,35,.28)' } } },
  plugins: []
}
