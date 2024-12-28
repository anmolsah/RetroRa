/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: "#FF1B8D",
          cyan: "#00E5FF",
          gold: "#FFD700",
        },
        retro: {
          dark: "#1A1A1A",
          light: "#F5F5F5",
        },
      },
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
        ibm: ['"IBM Plex Mono"', "monospace"],
      },
      backgroundColor: {
        light: {
          primary: "#1A1A1A",
          secondary: "#2A2A2A",
          accent: "#3A3A3A",
        },
      },
      textColor: {
        light: {
          primary: "#1A1A1A",
          secondary: "#4A4A4A",
        },
        dark: {
          primary: "#F5F5F5",
          secondary: "#CCCCCC",
        },
      },
    },
  },
  plugins: [],
};
