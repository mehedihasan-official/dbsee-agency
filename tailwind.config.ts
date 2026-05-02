import type { Config } from "tailwindcss";

// NOTE: In Tailwind v4, theme configuration (colors, fonts, animations, keyframes)
// is handled inside globals.css via the @theme block.
// This file is kept for compatibility but is effectively unused by Tailwind v4.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
};

export default config;