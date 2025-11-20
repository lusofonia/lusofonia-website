/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lusofonia: {
          bg: '#0f0718', // Deep purple/black background
          card: '#1a1025', // Slightly lighter purple/black for cards
          primary: '#8b5cf6', // Violet 500
          secondary: '#d946ef', // Fuchsia 500
          accent: '#06b6d4', // Cyan 500 for contrast
          text: '#f3e8ff', // Light purple/white text
          muted: '#a78bfa', // Muted purple text
          dark: '#05020a', // Almost black for footer/deep contrast
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'], // Try to use Outfit if available, else Inter
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #2a0a4a 0deg, #0f0718 360deg)',
      }
    },
  },
  plugins: [],
}
