/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'bg': 'rgb(var(--color-bg) / <alpha-value>)',
        'box': 'rgb(var(--color-box) / <alpha-value>)',
        'border': 'rgb(var(--box-border) / <alpha-value>)',
        'heading-1': 'rgb(var(--heading-1) / <alpha-value>)',
        'heading-2': 'rgb(var(--heading-2) / <alpha-value>)',
        'heading-3': 'rgb(var(--heading-3) / <alpha-value>)',
        primary: '#1d4ed8', // Changé de #17CF97 à #1d4ed8 (bleu)
        secondary: '#1e40af' // Bleu plus foncé pour le hover
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.2' }],
      },
      spacing: {
        'section': '6rem',
      }
    },
  },
  plugins: [],
}