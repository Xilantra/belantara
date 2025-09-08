/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './gatsby-*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8BF3A',
        // Prefer slate for dark backgrounds per request
        darkbg: {
          900: '#0f172a', // slate-900
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      // Golden Canon Grid helpers
      spacing: {
        // a minimal modular scale approximating Golden Canon rhythm
        'gc-1': '0.75rem',
        'gc-2': '1.2rem',
        'gc-3': '1.95rem',
        'gc-4': '3.15rem',
        'gc-5': '5.1rem',
      },
      maxWidth: {
        gc: '72ch', // readable measure following typographic canon
      },
      screens: {
        gc: '1140px', // desktop break tuned to golden canon layout
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
