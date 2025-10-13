import type { Config } from 'tailwindcss';
/** @type {import('tailwindcss').Config} */

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        header: '0px 4px 4px rgba(0, 0, 0, 0.05)',
      },
      fontFamily: {
        sans: ['var(--font-opensans)'],
        marker: ['var(--font-permanent-marker)'],
      },
      screens: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      colors: {
        black: '#101010',
        white: '#FFFFFF',
        hcadarkblue: '#02536C',
        hcalightblue: '#74C5CD',
        hcasilver: '#E8E7E7',
        ecsilver: '#ACADAD',
        hcanewblue: '#4D7EE8',
        hcanewlightblue: '#D0DDF8',
        hcaneworange: '#FFB51B',
        hcablack: '#222222',
        hcamelon: '#FFF0DD',
        hcanewmelon: '#FFE8D4',
        hcalightyellow: '#FFEDC6',
        hcayellow: '#FFF8E8',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
