const withOpacityValue = (variable) => ({ opacityValue }) => {
  if (opacityValue === undefined) {
    return `hsl(var(${variable}))`
  }
  return `hsla(var(${variable}) / ${opacityValue})`
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './gatsby-*.js',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        accent: '#F8BF3A',
        background: withOpacityValue('--background'),
        foreground: withOpacityValue('--foreground'),
        muted: withOpacityValue('--muted'),
        'muted-foreground': withOpacityValue('--muted-foreground'),
        secondary: withOpacityValue('--secondary'),
        'secondary-foreground': withOpacityValue('--secondary-foreground'),
        border: withOpacityValue('--border'),
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
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
    borderRadius: {
      none: '0px',
      sm: '0px',
      DEFAULT: '0px',
      md: '0px',
      lg: '0px',
      xl: '0px',
      '2xl': '0px',
      '3xl': '0px',
      full: '0px',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
