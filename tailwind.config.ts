import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#F4F7F6',
        'charcoal-teal': '#1C2B2D',
        'dark-teal': '#0D9488',
        'teal-tint': '#CCEBE8',
        'warm-white': '#FAFAFA',
        'muted-text': '#6B7A7C',
        'error-red': '#DC2626',
        'success-green': '#16A34A',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
        nepali: ['Noto Sans Devanagari', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        card: '12px',
      },
      boxShadow: {
        card: '0 2px 8px 0 rgba(28, 43, 45, 0.06)',
      },
      transitionProperty: {
        'all': 'all',
      },
    },
  },
  plugins: [],
};
export default config;
