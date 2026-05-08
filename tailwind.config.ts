/**
 * Tailwind CSS Configuration
 *
 * NOTE: In Tailwind CSS v4, theme configuration (colors, fonts, animations, keyframes)
 * is handled inside globals.css via the @theme block rather than in this config file.
 *
 * This file is kept for compatibility but is effectively unused by Tailwind v4.
 * See src/app/globals.css for color, font, and animation definitions.
 *
 * @file Tailwind CSS configuration
 * @author DBSEE Agency
 */

import type { Config } from "tailwindcss";

// NOTE: In Tailwind v4, theme configuration (colors, fonts, animations, keyframes)
// is handled inside globals.css via the @theme block.
// This file is kept for compatibility but is effectively unused by Tailwind v4.
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
};

export default config;
