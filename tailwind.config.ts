
import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hana: {
          magenta: '#B11E76',
          gold: '#D4AF37',
          // Dynamic colors using CSS variables
          bg: 'var(--bg-primary)',
          'bg-sec': 'var(--bg-secondary)',
          text: 'var(--text-primary)',
          'text-sec': 'var(--text-secondary)',
          'card': 'var(--card-bg)',
          'glass-border': 'var(--glass-border)',
          'border-ui': 'var(--border-ui)'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
