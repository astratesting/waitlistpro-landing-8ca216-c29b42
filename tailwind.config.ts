import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0f',
        violet: '#6C63FF',
        coral: '#FF6584',
        chalk: '#F7F3EA',
        fog: '#A7A2BC',
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 80px rgba(108, 99, 255, 0.35)',
        coral: '0 0 60px rgba(255, 101, 132, 0.28)',
      },
    },
  },
  plugins: [],
};

export default config;
