import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        meteor: 'meteor var(--duration, 10s) linear infinite',
         orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        meteor: {
          '0%': { transform: 'translateY(-20%)', opacity: '0' },
          '30%': { opacity: '1' },
          '100%': { transform: 'translateY(120vh)', opacity: '0' },
        },
         orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
      colors: {
        secondary: '#BABABA',
        blue: {
          500: '#4762ff',
          600: '#121127',
          100: '#F4F6FA',
        },
        primary: '#814AC8',
        dark: '#2A2B2E',
      },
    },
  },
  plugins: [],
}

export default config
