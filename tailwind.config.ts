import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        night: '#030405',
        void: '#000000',
        charcoal: '#0B0F14',
        surface: '#12161E',
        gold: {
          400: '#FAD9A1',
          500: '#D4AF37',
          600: '#B4942C',
        },
        accent: {
          teal: '#2DD4BF',
          purple: '#A855F7',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Playfair Display', 'serif'], // Elegant serif for headings
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #12161E 0deg, #0B0F14 180deg, #12161E 360deg)',
        'gold-gradient': 'linear-gradient(135deg, #FAD9A1 0%, #D4AF37 100%)',
      },
      boxShadow: {
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.15)',
        'glow-sm': '0 0 10px rgba(255,255,255,0.05)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slow-pan': 'panImage 30s linear infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        panImage: {
          '0%': { objectPosition: 'center top' },
          '100%': { objectPosition: 'center bottom' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
