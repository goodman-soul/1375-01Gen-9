/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1080px",
        xl: "1080px",
      },
    },
    extend: {
      colors: {
        paper: "#F5F1E8",
        "paper-2": "#EDE7DA",
        "paper-3": "#E6DEC8",
        ink: "#2C2A27",
        "ink-soft": "#6B6560",
        "ink-line": "#D9D2C3",
        "ink-line-soft": "#E8E2D3",
        cinnabar: "#8B4513",
        "cinnabar-soft": "#A0632F",
        pine: "#3D5A5B",
        "pine-soft": "#547374",
      },
      fontFamily: {
        serif: [
          '"Noto Serif SC"',
          '"Source Han Serif CN"',
          '"Songti SC"',
          '"SimSun"',
          "serif",
        ],
        sans: [
          '"Noto Sans SC"',
          '"Source Han Sans CN"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          "system-ui",
          "sans-serif",
        ],
      },
      spacing: {
        84: "21rem",
        96: "24rem",
        112: "28rem",
        128: "32rem",
        144: "36rem",
      },
      letterSpacing: {
        wider1: "0.08em",
        widest1: "0.15em",
      },
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
    },
  },
  plugins: [],
};
