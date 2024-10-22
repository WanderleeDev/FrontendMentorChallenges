import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "text-primary-clr": "var(--text-primary-clr)",
        "text-secondary-clr": "var(--text-secondary-clr)",
        "text-clr-primary-light": "var(--text-clr-primary-light)",
        "accent-clr": "var(--accent-clr)",
        "accent-clr-light": "var(--accent-clr-light)",
      },
      screens: {
        xs: "350px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
