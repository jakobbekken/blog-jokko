/** @type {import("tailwindcss").Config} */

import typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  plugins: [typography],
  theme: {
    extend: {
      colors: {
        bg: "#141312",
        surface: "#1c1a18",
        text: "#e6e2dc",
        muted: "#b8b3aa",
        accent: "#b3542e",
        gold: "#c2a14d",
      },
      fontSize: {
        xxs: "0.750rem",
        xs: "0.875rem",
        sm: "1.000rem",
        base: "1.25rem",
        md: "1.375rem",
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
      fontFamily: {
        display: ["Cormant", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
};
