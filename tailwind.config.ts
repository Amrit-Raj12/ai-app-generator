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
        meteor: "meteor var(--duration, 10s) linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "translateY(-20%)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(120vh)", opacity: "0" },
        },
      },
    },
    colors: {
      secondary: "#BABABA",
      blue: {
        500: "#4762ff",
        600: " #121127",
        100: "#F4F6FA",
      },
      dark: "#2A2B2E"
    }
  },
  plugins: [],
}

export default config
