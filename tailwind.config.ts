import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        term: {
          bg: "#0a0e0a",
          surface: "#111811",
          border: "#1e2e1e",
          muted: "#5a6b5a",
          green: "#22c55e",
          greenDim: "#16a34a",
          amber: "#eab308",
          cyan: "#06b6d4",
        },
      },
      fontFamily: {
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        blink: { "0%,50%": { opacity: "1" }, "51%,100%": { opacity: "0" } },
        type: { from: { width: "0" }, to: { width: "100%" } },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
export default config;
