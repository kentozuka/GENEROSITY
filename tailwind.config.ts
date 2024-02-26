import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    extend: {
      colors: {
        generous: {
          100: '#FBFBFB',
          200: '#EEEEEE',
          300: '#DDDDDD',
          400: '#CCCCCC',
          500: '#555555',
          600: '#1B1B1B'
        }
      }
    }
  }
} satisfies Config

export default config
