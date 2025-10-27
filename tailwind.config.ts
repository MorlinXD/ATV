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
        tectonic: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '50%': { transform: 'translateX(2px)' },
          '75%': { transform: 'translateX(-1px)' },
        },
        slideGrow: {
          '0%': { transform: 'scale(0.9) translateX(0)', opacity: '0' },
          '10%': { transform: 'scale(1) translateX(0)', opacity: '1' },
          '50%': { transform: 'scale(1.05) translateX(10px)', opacity: '1' },
          '100%': { transform: 'scale(1.05) translateX(40px)', opacity: '1' },
        },
        'zoom-slide-in': {
          '0%': { transform: 'scale(0.8) translateX(50px)', opacity: '0' },
          '100%': { transform: 'scale(1) translateX(0)', opacity: '1' },
        },
        'scale-slide-out': {
          '0%': { transform: 'scale(1) translateX(0)', opacity: '1' },
          '100%': { transform: 'scale(0.8) translateX(-50px)', opacity: '0' },
        },
        'slide-loop': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out forwards',
        'tectonic': 'tectonic 0.5s ease-in-out infinite',
        'slide-grow': 'slideGrow 3s ease-in-out forwards',
        'zoom-slide-in': 'zoom-slide-in 0.7s ease-out forwards',
        'scale-slide-out': 'scale-slide-out 0.6s ease-in forwards',
        'slide-loop': 'slide-loop 15s linear infinite',
      },
    },
  },
  plugins: [],

};

export default config;
