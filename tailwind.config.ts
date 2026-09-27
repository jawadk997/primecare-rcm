import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-nunito)', 'sans-serif'],
        sans: ['var(--font-nunito)', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 12px 28px rgba(15, 159, 154, 0.12)',
      },
      colors: {
        navy: {
          DEFAULT: '#10233F',
          950: '#081425',
          900: '#10233F',
          800: '#1A2E4A',
        },
        teal: {
          DEFAULT: '#0F9F9A',
          600: '#0A8E8A',
          500: '#14B8A6',
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(13,148,136,0.18), transparent 35%), radial-gradient(circle at bottom right, rgba(16,185,129,0.12), transparent 25%)',
      },
    },
  },
  plugins: [],
};

export default config;
