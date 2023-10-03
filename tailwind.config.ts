import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      boxShadow: {
        header: '0px 4px 4px rgba(0, 0, 0, 0.05)'
      },
      fontFamily: {
        sans: ['var(--font-opensans)'],
        marker: ['var(--font-permanent-marker)']
      }
    },
    colors: {
      black: '#101010',
      white: '#FFFFFF',
      hcadarkblue: '#02536C',
      hcalightblue: '#74C5CD',
      hcasilver: '#E8E7E7',
      ecsilver: '#ACADAD'
    }
  },
  plugins: []
}
export default config
