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
        glow: '0 20px 60px rgba(13, 148, 136, 0.18)',
      },
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          950: '#050B13',
          900: '#0A1628',
          800: '#13223D',
        },
        teal: {
          DEFAULT: '#0D9488',
          600: '#0F9F96',
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
