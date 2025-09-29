/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        rosePine: {
          base: "#191724",
          surface: "#1f1d2e",
          overlay: "#26233a",
          muted: "#6e6a86",
          subtle: "#908caa",
          text: "#e0def4",
          love: "#eb6f92",
          gold: "#f6c177",
          rose: "#ebbcba",
          pine: "#31748f",
          foam: "#9ccfd8",
          iris: "#c4a7e7",
          highlightLow: "#21202e",
          highlightMed: "#403d52",
          highlightHigh: "#524f67",
        },
      },
      fontSize: {
        xs: "0.875rem",
        sm: "1.000rem",
        base: "1.25rem",
        lg: "1.500rem",
        xl: "1.750rem",
        "2xl": "2.000rem",
        "3xl": "2.500rem",
        "4xl": "3.000rem",
        "5xl": "3.750rem",
        "6xl": "4.500rem",
        "7xl": "5.000rem",
        "8xl": "6.000rem",
        "9xl": "8.000rem",
      },
    },
  },
};
