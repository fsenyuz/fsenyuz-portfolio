/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A56A9',
          light: '#0E75D0',
          dark: '#073A75'
        },
        dark: '#1A1A1A',
        light: '#F5F5F5',
        accent: {
          DEFAULT: '#009485',
          light: '#00B3A0',
          dark: '#00695F'
        },
        highlight: '#FFC107'
      },
      spacing: {
        xs: '4px',
        s: '8px',
        m: '12px',
        l: '16px',
        xl: '24px',
        '2xl': '32px'
      },
      fontSize: {
        h1: ['2.25rem', { lineHeight: '1.2' }],
        h2: ['1.75rem', { lineHeight: '1.3' }],
        h3: ['1.375rem', { lineHeight: '1.3' }],
        body: ['1rem', { lineHeight: '1.6' }],
        small: ['0.875rem', { lineHeight: '1.6' }]
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};